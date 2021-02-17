/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

import routes from '@shared/infra/http/routes';

import createConnection from '@shared/infra/typeorm';
import rateLimiter from './middlewares/rateLimiter';
import '@shared/container';

createConnection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  '/files',
  express.static(uploadConfig.tempFolder || uploadConfig.uploadsFolder),
);
app.use(rateLimiter);
app.use(routes);

app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started... Port 3333');
});

import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UserController from '@modules/users/infra/controllers/UserController';
import UserAvatarController from '@modules/users/infra/controllers/UserAvatarController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const UserRouter = Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

UserRouter.post('/', userController.create);

UserRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default UserRouter;

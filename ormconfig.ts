import 'dotenv/config';

export default {
  type: 'postgres',
  host: process.env.IP_BD,
  port: process.env.PORT_BD,
  username: process.env.USER_BD,
  password: process.env.PASS_DB,
  database: process.env.DB,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};

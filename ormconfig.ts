import 'dotenv/config';

export default {
  type: 'postgres',
  host: process.env.IP_BD,
  port: process.env.PORT_BD,
  username: process.env.USER_BD,
  password: process.env.PASS_DB,
  database: process.env.DB,
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};

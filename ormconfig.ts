export default [
  {
    name: 'default',
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
  },
  {
    name: 'mongo',
    type: 'mongodb',
    host: process.env.MONGO_IP,
    port: process.env.MONGODB_PORT,
    database: process.env.MONGO_DBASE,
    useUnifiedTopology: true,
    entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
  },
];

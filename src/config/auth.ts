import 'dotenv/config';

export default {
  jwt: {
    secret: process.env.SECRET || '2e67f557ee80c7dc528e8cecab3d7b64',
    expiresIn: '1d',
  },
};

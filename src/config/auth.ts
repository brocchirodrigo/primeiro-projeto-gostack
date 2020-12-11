import 'dotenv/config';

export default {
  jwt: {
    secret: process.env.secret,
    expiresIn: '1d',
  },
};

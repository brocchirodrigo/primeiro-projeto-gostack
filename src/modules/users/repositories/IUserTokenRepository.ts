/* eslint-disable camelcase */
import userToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<userToken>;
}

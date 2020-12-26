/* eslint-disable camelcase */
import IUserTokenRepository from '@modules/users/repositories/IUserTokenRepository';

import { v4 } from 'uuid';

import UserToken from '../../infra/typeorm/entities/UserToken';

class FakeUserTokenRepository implements IUserTokenRepository {
  private userToken: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: v4(),
      token: v4(),
      user_id,
    });

    this.userToken.push(userToken);

    return userToken;
  }
}

export default FakeUserTokenRepository;

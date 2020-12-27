import { injectable, inject } from 'tsyringe';
// import User from '@modules/users/infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import IUserTokenRepository from '@modules/users/repositories/IUserTokenRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokenRepository')
    private userTokenRepository: IUserTokenRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const checkUsersExists = await this.userRepository.findByEmail(email);

    if (!checkUsersExists) {
      throw new AppError('User does not exists');
    }

    const { token } = await this.userTokenRepository.generate(
      checkUsersExists.id,
    );

    await this.mailProvider.sendMail(
      email,
      `Pedido de recuperação de senha recebido | Token: ${token}`,
    );
  }
}

export default SendForgotPasswordEmailService;

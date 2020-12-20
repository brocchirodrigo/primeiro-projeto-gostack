import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('Should be able to create a new user', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createUser = new CreateUserService(fakeAppointmentsRepository);

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndow@test.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a new user woth same email from another', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createUser = new CreateUserService(fakeAppointmentsRepository);

    await createUser.execute({
      name: 'John Doe',
      email: 'johndow@test.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndow@test.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

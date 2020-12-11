import Appointments from '@modules/appointments/infra/typeorm/entities/Appointment';

export default interface IAppointmentsRespository {
  findByDate(date: Date): Promise<Appointments | undefined>;
}

import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandelMailProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: HandelMailProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);

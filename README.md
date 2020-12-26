# GoBarber Backend
  
  *Pré-requisitos*

  Sistema acessado com usuário e senha, definndo perfil de acesso e que possua senha criptografada em banco de dados;

## Mapeamento de funcionalidades

1. Recuperação de senha
   
  **RF**

    - Usuário deve poder recuperar sua senha informando o seu e-mail;
    - O usuário deve receber um e-mail com instruções de recuperação de senha;
    - O usuário deve poder resetar sua senha;

  **RNF**

    - Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
    - Utilizar o Amazon SES para envios em produção;
    - O envio de e-mails deve acontecer em segundo plano (background job);

  **RN**

    - O link enviado por e-mail para resetar a senha, deve expirar em 2 horas;
    - O usuário precisa confirmar a nova senha ao resetar sua senha;

2. Atualização do perfil

  **RF**

    - O usuário deve poder atualizar seu nome, e-mail e senha;

  **RN**

    - O usuário não pode alterar seu e-mail para um e-mail já utilziado;
    - Para atualizar sua senha, o usuário deve informar a senha antiga;
    - Para atualizar sua senha, o usuário precisa confirmar a nova

3. Painel do Prestador
   
  **RF**

    - O usuário deve poder listar seus agendamentos de um dia específico;
    - O prestador deve receber uma notificação sempre que houver um novo agendamento;
    - O prestador deve poder visualizar as notificações não lidas;
  
  **RNF**

    - Os agendamentos do prestador no dia devem ser armazenados em cache;
    - As notificações do prestador devem ser armazenadas no MongoDB;
    - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;
  
  **RN**

    - A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

4. Agendameto de serviços
   
  **RF**

    - O usuário deve poder listar todos os pretadores de serviços cadastrados;
    - O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
    - O usuário deve poder listar horários disponíveis em um dia especificos de um prestador;
    - O usuário deve poder realizar novo um agendamento com um prestador;

  **RNF**

    - A listagem de prestadores deve ser armazenados em cache;

  **RN**

    - Cada agendamento deve durar 1 hora exatamente;
    - Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro horário às 8h, último às 17h);
    - O usuário não pode agendar em um horário já ocupado;
    - O usuário não pode agendar em um horário que já passou;
    - O usuário não pode agendar serviços consigo mesmo;

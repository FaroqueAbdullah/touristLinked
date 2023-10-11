// eslint-disable-next-line @typescript-eslint/no-var-requires
const SibApiV3Sdk = require('sib-api-v3-sdk');
const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_API ? process.env.EMAIL_API : '';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

interface UserEmailType {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  passwordResetToken: string | null;
  passwordHash: string;
  isActive: boolean;
  accountActivationToken: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const sendAccountCreatedEmail = (user: UserEmailType) => {
  sendSmtpEmail.subject = 'TouristLinked account approval';
  sendSmtpEmail.htmlContent = `
  <html>
    <body>
      <h3>Hello ${user.firstName} ${user.lastName}, Welcome to TouristLinked </h3>
      <h4>Where we connect tourist like you around the world, Let's make your map more green </h4>
      <h4>Your Activation code: </h4>
      <h2> ${user.accountActivationToken} </h2>
      <h4>Happy Travelling </h4>
    </body>
  </html>
  `;
  sendSmtpEmail.sender = {
    name: 'TouristLinked',
    email: 'noreply@touristlinked.com',
  };
  sendSmtpEmail.to = [
    { email: user.email, name: user.firstName + ' ' + user.lastName },
  ];
  sendSmtpEmail.headers = { 'Some-Custom-Name': 'unique-id-1234' };
  sendSmtpEmail.params = {
    parameter: 'My param value',
    subject: 'New Subject',
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data: object) {
      console.log(
        'API called successfully. Returned data: ' + JSON.stringify(data),
      );
    },
    function (error: Error) {
      // console.log('Fucking email error')
      console.error(error);
    },
  );
};

const sendPasswordResetEmail = (user: UserEmailType) => {
  sendSmtpEmail.subject = 'TouristLinked account approval';
  sendSmtpEmail.htmlContent = `
  <html>
    <body>
      <h3>Hello ${user.firstName} ${user.lastName}, Welcome Back! </h3>
      <h4>Here we are happy to help you for recovering your password</h4>
      <h4>Your Password reset code: </h4>
      <h2> ${user.passwordResetToken} </h2>
    </body>
  </html>
  `;
  sendSmtpEmail.sender = {
    name: 'TouristLinked',
    email: 'noreply@touristlinked.com',
  };
  sendSmtpEmail.to = [
    { email: user.email, name: user.firstName + ' ' + user.lastName },
  ];
  sendSmtpEmail.headers = { 'Some-Custom-Name': 'unique-id-1234' };
  sendSmtpEmail.params = {
    parameter: 'My param value',
    subject: 'New Subject',
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data: object) {
      console.log(
        'API called successfully. Returned data: ' + JSON.stringify(data),
      );
    },
    function (error: Error) {
      console.error(error);
    },
  );
};

const sendPasswordResetSuccessEmail = (user: UserEmailType) => {
  sendSmtpEmail.subject = 'TouristLinked account approval';
  sendSmtpEmail.htmlContent = `
  <html>
    <body>
      <h3>Hello ${user.firstName} ${user.lastName}, Password is updated! </h3>
      <h4>WLet's make your map more green than before </h4>
      <h4>Happy Travelling </h4>
    </body>
  </html>
  `;
  sendSmtpEmail.sender = {
    name: 'TouristLinked',
    email: 'noreply@touristlinked.com',
  };
  sendSmtpEmail.to = [
    { email: user.email, name: user.firstName + ' ' + user.lastName },
  ];
  sendSmtpEmail.headers = { 'Some-Custom-Name': 'unique-id-1234' };
  sendSmtpEmail.params = {
    parameter: 'My param value',
    subject: 'New Subject',
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data: object) {
      console.log(
        'API called successfully. Returned data: ' + JSON.stringify(data),
      );
    },
    function (error: Error) {
      console.error(error);
    },
  );
};

export {
  sendAccountCreatedEmail,
  sendPasswordResetEmail,
  sendPasswordResetSuccessEmail,
};

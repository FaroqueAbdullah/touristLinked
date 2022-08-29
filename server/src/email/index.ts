const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.EMAIL_API ? process.env.EMAIL_API : "";

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();


const sendAccountCreatedEmail = ( user: any ) => {
  sendSmtpEmail.subject = "TouristLinked account approval";
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
  sendSmtpEmail.sender = {"name":"TouristLinked","email":"noreply@touristlinked.com"};
  sendSmtpEmail.to = [{"email":user.email, "name": user.firstName + ' ' + user.lastName}];
  sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
  sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data: any) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function(error: any) {
    console.error(error);
  });
}

const sendPasswordResetEmail = ( user: any ) => {
  sendSmtpEmail.subject = "TouristLinked account approval";
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
  sendSmtpEmail.sender = {"name":"TouristLinked","email":"noreply@touristlinked.com"};
  sendSmtpEmail.to = [{"email":user.email, "name": user.firstName + ' ' + user.lastName}];
  sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
  sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data: any) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function(error: any) {
    console.error(error);
  });
}

const sendPasswordResetSuccessEmail = ( user: any ) => {
  sendSmtpEmail.subject = "TouristLinked account approval";
  sendSmtpEmail.htmlContent = `
  <html>
    <body>
      <h3>Hello ${user.firstName} ${user.lastName}, Password is updated! </h3>
      <h4>WLet's make your map more green than before </h4>
      <h4>Happy Travelling </h4>
    </body>
  </html>
  `;
  sendSmtpEmail.sender = {"name":"TouristLinked","email":"noreply@touristlinked.com"};
  sendSmtpEmail.to = [{"email":user.email, "name": user.firstName + ' ' + user.lastName}];
  sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
  sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data: any) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function(error: any) {
    console.error(error);
  });
}


export {
  sendAccountCreatedEmail,
  sendPasswordResetEmail,
  sendPasswordResetSuccessEmail
}
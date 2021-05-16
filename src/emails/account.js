const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    // to: 'nishkarshdoni@gmail.com',
    to: email,
    from: 'nishkarshdoni1@gmail.com',
    subject: 'Thanks for Joining',
    text: `Welcome to the app , ${name} .I hope it is actually recieved :). `
  })
}

module.exports = {
  sendWelcomeEmail
}
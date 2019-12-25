// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js

const { MAILGUN_API_KEY, MAILGUN_DOMAIN, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN })

const { validateEmail, validateLength } = require('./validations')

exports.handler = async (event) => {
  if (!process.env.CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined'
    }
  }

  const body = JSON.parse(event.body)

  try {
    validateLength('body.name', body.name, 3, 50)
  } catch (e) {
    console.log("Invalid Name!" + body.name);
    return {
      statusCode: 403,
      body: e.message
    }
  }

  try {
    validateEmail('body.email', body.email)
  } catch (e) {
    console.log("Invalid Email!" + body.email);
    return {
      statusCode: 403,
      body: e.message
    }
  }

  try {
    validateLength('body.content', body.content, 10, 1000)
  } catch (e) {
    console.log("Invalid content" + body.content)
    return {
      statusCode: 403,
      body: e.message
    }
  }
  
  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    'h:Reply-To': body.email,
    subject: `${body.name} sent you a message from marcusquettan.com : ${body.subject}`,
    text: body.content
  }

  return mailgun.messages().send(mailgunData).then(() => ({
    statusCode: 200,
    body: `Successfully sent email from ${body.email} to ${CONTACT_TO_EMAIL_ADDRESS}`
  })).catch(error => {
    console.log(error);
    return ({
      statusCode: 422,
      body: `Failed to send email from ${body.email} to ${CONTACT_TO_EMAIL_ADDRESS}`
    })
  });
}

const dotenv = require('dotenv')
dotenv.config()

const Airtable = require('airtable-node')
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'adamadiouf2017@gmail.com', // Your Gmail address
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
})

exports.handler = async (event, context, cb) => {
  try {
    const formData = JSON.parse(event.body)
    const { name, email, message } = formData

    if (email && isValidEmail(email)) {
      const mailOptions = {
        from: 'adamadiouf2017@gmail.com',
        to: email,
        subject: 'Your Subject Here',
        text: `Hello I'am ${name},\n\nYour reservation details:\nMessage: ${message}\n`,
      }

      const info = await transporter.sendMail(mailOptions)
      console.log('Email sent:', info.response)
    } else {
      console.log('Invalid or missing email address')
    }

     await airtable.create({ fields: { name, email, message } });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: 'There was an error',
    }
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

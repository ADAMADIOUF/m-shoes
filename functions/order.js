const nodemailer = require('nodemailer')

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod

  if (method !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Only POST requests allowed' }),
    }
  }

  const { country, name, email, phoneNumber, titles, totalPrice } = JSON.parse(
    event.body
  )

  if (!name || !email || !country || !titles || !totalPrice || !phoneNumber) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Please provide all values' }),
    }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_EMAIL,
      pass: process.env.EMAIL_PASSPORT,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_EMAIL,
    to: 'deboba02@gmail.com',
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nTitles: ${titles.join(
      ', '
    )}\nTotal Price: ${totalPrice}\nPhone Number: ${phoneNumber}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Email sent successfully' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: `Failed to send email: ${error.message}` }),
    }
  }
}

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
    to: 'terangafishservice01@gmail.com',
    subject: `Soumission du formulaire de contact de la part de ${name}`,
    text: `Nom et Prenom: ${name}\nEmail: ${email}\nPays: ${country}\nNom du Produit acheter: ${titles.join(
      ', '
    )}\nPrix Total: ${totalPrice}\nNumero de telephone: ${phoneNumber}`,
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

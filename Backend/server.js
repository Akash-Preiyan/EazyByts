const express = require("express")
const cors = require('cors')
const  dotenv = require("dotenv")
const mongoose = require('mongoose')
const connecttoDB = require("./config/db.js")
const Project = require("./models/Project.js")
const nodemailer = require('nodemailer')

dotenv.config()
const PORT = process.env.PORT || 8000;

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

//nodemailer setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
})

//routes
app.get('/api/projects', async (req, res) => {
  try{
    const projects = await Project.find()
    res.json(projects)
  } catch(err) {
    res.status(500).json({ error: "Server error"})
  }
})

app.post('/api/sendmail', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New Contact Form Submittion(PORTFOLIO): ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.error("Error sending mail: ",error)
      return res.status(500).json({message: "Failed to send Mail"})
    }
    res.status(200).json({message: "Email send successfully"})
  })

  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);
  console.log('EMAIL:', process.env.EMAIL);
  console.log('PASSWORD:', process.env.PASSWORD ? '***' : 'Not Set');

})

connecttoDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("Failed to connect to the server")
    process.exit(1);
  })

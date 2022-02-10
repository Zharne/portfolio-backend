const express = require("express")
const nodemailer = require('nodemailer')
const app = express.Router()

app.post('/', (req, res) => {
let{name,contact,message}= req.body;
    
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zharnedesember@gmail.com',
    pass: 'zharne1997',
  }
});
const mailOptions = {
  from: 'email',
  to: 'zharnedesember@gmail.com',
  subject: 'New contact from your portfolio',
  text: `${name} has contacted you
  4
  Please contact them back on ${contact}
  ${message}`,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.status(400).send({ msg: "Email not sent" });
  } else {
    console.log('Email sent: ' + info.response);
    res.send({ msg: "Email has been sent successfully" });
  }
});
});

module.exports = app
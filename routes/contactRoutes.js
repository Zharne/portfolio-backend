const express = require("express")
const nodemailer = require('nodemailer')
const app = express.Router()

const app = express.Router()

app.get('/', (req, res) => {

    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zharnedesember@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'zharnedesember@gmail.com',
  to: 'zharnedesember@gmail.com',
  subject: 'New contact from your portfolio',
  text: `${name} has contacted you

  Please contact them back on ${contact}
  
  ${message}`
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
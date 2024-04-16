var nodemailer = require('nodemailer');

let userFullName = document.getElementById('userFullName');
let userEmail = document.getElementById('userEmail');
let userSubject = document.getElementById('userSubject');
let userMessage = document.getElementById('userMessage');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'saad.ouardi.dev@gmail.com',
        pass: 'aujs wkwe dhqq ujed'
    }
});

var mailOptions = {
    from: `${userEmail}`,
    to: 'saad.ouardi.dev@gmail.com',
    subject: `${userSubject}`,
    text: `${userMessage}`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
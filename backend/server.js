const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


const allowedOrigins = [
    'http://localhost:3000',
    'https://saadouardi.github.io',
];

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: "Too many requests from this IP, please try again later."
});

app.use(cors({origin: allowedOrigins,}));
app.use(helmet());
app.use(bodyParser.json());
app.use('/send', limiter);

app.post('/send', (req, res) => {
    const { fullName, email, subject, message } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    if (!email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: subject,
        text: `Name: ${fullName}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error while sending email:", error);
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

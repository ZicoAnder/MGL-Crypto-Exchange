const nodemailer = require('nodemailer');
const i18n = require('i18n');

i18n.configure({
    locales: ['En', 'Mn'],
    directory: __dirname + '/locales',
    defaultLocale: 'En',
});

module.exports = {
    deliverEmail: async function (dest, subject, body) {
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PWD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: dest,
            subject: subject,
            text: body
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info);
            return info;
        } catch (error) {
            console.error('Error sending email:', error.message);
            throw error;
        }
    }
};

// module.exports = {
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//       user: 'tommie.schamberger92@ethereal.email',
//       pass: '3FzkhF7Ut17qFdx3Qx',
//     },
//   };

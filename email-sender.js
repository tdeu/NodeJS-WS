const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thomas.derouck@gomycode.com',
        pass: 'retirémdp'
    }
});

let mailOptions = {
    from: 'thomas.derouck@gomycode.com', 
    to: 'thomasderouck@hotmail.com', 
    subject: 'Hello test', 
    text: 'Hello world?', 
    html: '<b>Hello world?</b>' 
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});

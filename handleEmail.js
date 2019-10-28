var nodemailer = require('nodemailer');

exports.sendEmail = function (html) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ajsimwork@gmail.com',
        pass: '8OneTwo3'
      }
    });
    if(html) {
        var mailOptions = {
            from: 'egg.uoft@gmail.com',
            to: 'ajsimwork@gmail.com',
            subject: 'Sending Email using Node.js',
            html: '<h1>Inshallah!</h1><br/><p>The fire rises brother!</p>',
        };
    } else {
        var mailOptions = {
            from: 'egg.uoft@gmail.com',
            to: 'ajsimwork@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'Allahu akbar brother!'
        };
    }
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
};
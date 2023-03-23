const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'cagatayakdeniz16@gmail.com',
        pass:'vqcybxtxywgpoent'
    }
});

var mailOptions = {
    from: 'cagatayakdeniz16@gmail.com',
    to: 'hojowi9597@necktai.com',
    subject: 'Test mail',
    html: `<a href="https://www.youtube.com/">Hello Youtube</a>`
};
  
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
    }
});
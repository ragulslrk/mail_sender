const route =require('express').Router()
const nodemailer=require("nodemailer")

let transporter2= {
    service: 'gmail',
    auth: {
    user:'amethyst3724@gmail.com'    ,
    pass:'jryvsuugbwnwstpp',
    },

};
const smtpTransport2 = nodemailer.createTransport(transporter2)

route.post('/sendmail_amethyst',(req,res)=>{
console.log('in amethy');

    const mailOptions2 = {
                from:'amethyst3724@gmail.com',
               to:req.body.email,
               subject: `Confirmation Mail (amethyst Chatbot)`,
               html: `Thank you for shopping at amethyst.we are already working hard to prepare your order.Because it is currently being processed,we'll be in touch again soon.You will receive your order within 3 - 7 days.As for you will not we charged for an delivery fee.Stay happy,healthy,glowy and don't forget to BE YOU
               ~Team AMETHYST`
                   }
           smtpTransport2.sendMail(mailOptions2, function (err, info) {
                       if (err) {
                         console.log(err);
                       } else {
                           console.log('gmail sent 2');
                           res.sendStatus(200)
                       }})
   })
module.exports=route
const  express=require('express')
const nodemailer=require("nodemailer")
const fs = require("fs")
const path = require("path")
const app=express()
app.use(express.urlencoded({extended:true}));   


let transporter1= {
    service: 'gmail',
    auth: {
    user:'candy.chatbot@gmail.com'    ,
    pass:'mynhnjxhhfyatkcv',
    },

};

const smtpTransport1 = nodemailer.createTransport(transporter1)


app.post('/sendmail_candy',(req,res)=>{
console.log('in candy');
 const mailOptions1 = {
             from:'candy.chatbot@gmail.com',
            to:req.body.email,
            subject: `Confirmation Mail (Candy Chatbot)`,
            html: 'Your enquiry has been recorded and the college management will contact you as soon as possible. Thank you! :)'
                }
        smtpTransport1.sendMail(mailOptions1, function (err, info) {
                    if (err) {
                      console.log(err);
                    } else {
                        console.log('gmail sent 1');
                        res.sendStatus(200)
                    }})
})

//route  to  amethyst 
const  sen_amy=require('./amethyst')
app.use(sen_amy)


app.get('/',(req,res)=>{
 res.send('mail sender  is working')
})
app.listen(process.env.PORT ||3232,()=>{

        console.log('success mailsender')})
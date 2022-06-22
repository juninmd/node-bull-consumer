import * as nodemailer from 'nodemailer';
// import configs from '../configs';
export default nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4a0513eb27a2ba",
    pass: "0430ba5bfde940"
  }
});

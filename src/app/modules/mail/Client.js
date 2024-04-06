import { createTransport } from "nodemailer"

const transporter = createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "123132",
      pass: "123123"
    }
});

const sendMail = async (target, subject, html, attachments) => {
    await transporter.sendMail({
        from: 'from@example.com',
        to: target,
        subject: subject,
        html: html,
        attachments: attachments
    })
}

export {
    sendMail
}
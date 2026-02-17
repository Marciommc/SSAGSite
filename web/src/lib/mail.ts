import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465');
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

export const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

export interface MailOptions {
    to: string;
    subject: string;
    text?: string;
    html?: string;
}

export async function sendMail({ to, subject, text, html }: MailOptions) {
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.warn("SMTP credentials not configured. Email not sent.");
        return null;
    }

    try {
        const info = await transporter.sendMail({
            from: `SSAG Tecnologia <${SMTP_FROM}>`,
            to,
            subject,
            text,
            html,
        });
        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}

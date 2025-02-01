import { EMAIL_CONFIRMATION_TEMPLATE } from "./emailTemplate.js";
import { sender, mailtrapClient } from "./mailtrapConfig.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  console.log(email, verificationToken);

  const recipients = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Mail Verification",
      html: EMAIL_CONFIRMATION_TEMPLATE.replace(
        "{VerificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error while sending the maile ${error.message}`);
    throw new Error(`Error while sending the maile ${error.message}`);
  }
};

export const verifyMail = async () => {};

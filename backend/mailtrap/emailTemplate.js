export const EMAIL_CONFIRMATION_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
  </head>
  <body
    style="
      font-family: 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.8;
      color: #444;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    "
  >
    <div
      style="
        background: #15243c;
        padding: 20px;
        text-align: center;
        border-radius: 10px 10px 0 0;
      "
    >
      <h1 style="color: white; margin: 0; font-size: 24px">
        Confirm Your Email
      </h1>
    </div>
    <br
      style="
        background-color: #fff4f4;
        padding: 25px;
        border: 1px solid #ffcccc;
        border-top: none;
        border-radius: 0 0 10px 10px;
      "
    >
      <p style="font-size: 16px; margin: 0 0 15px">Hi there!</p>
      <p style="margin: 0 0 20px">
        We're excited to have you onboard! To start exploring please verify your
        email address by using code below:
      </p>
      <div style="text-align: center; margin: 30px 0">
        <span
          style="
            display: inline-block;
            font-size: 36px;
            font-weight: bold;
            color: #15243c;
            padding: 10px 20px;
            border: 2px dashed #15243c;
            border-radius: 5px;
          "
        >
          {VerificationCode}
        </span>
      </div>
      <p style="margin: 0 0 20px">
        This code valid for only 15 minuts.Please complete the verification within this time frame.
      </p>
      <p style="margin: 0;">If you didn't request this email, please disregard it.</p>
      <p style="margin: 30px 0 0;">Best Regards,  <br> <strong>TK Supporting Team</strong> </p>
     </div>
     <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
        <p style="margin: 0;">
            This is an automated message.Please do not reply to this email.
        </p>
        <p style="margin: 5px 0 0;">&copy; 2025 TK Company. All rights reserved</p>
     </div>
  </body>
</html>
;
`;

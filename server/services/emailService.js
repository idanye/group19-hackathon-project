import nodemailer from 'nodemailer';

// runs when a user submits a question
export const sendEmailConfirmation = (userEmail) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'group19hackathon@gmail.com',
      pass: 'ehdd kber ntku koeo',
    },
  });

  let mailOptions = {
    from: 'group19hackathon@gmail.com',
    to: userEmail,
    subject: 'Your Question Was Submitted Successfully',
    html: `
      <div style="font-family: 'Arial', sans-serif; background-color: #ffffff; padding: 20px; text-align: center; border: 1px solid #ddd; border-radius: 15px; max-width: 600px; margin: auto;">
        <h1 style="font-size: 24px; color: #333; margin-bottom: 10px;">Thank You for Sharing Your Question!</h1>
        <p style="font-size: 16px; color: #555; margin-bottom: 20px; line-height: 1.5;">
          We appreciate your trust in SafeSpace. As soon as your question receives a response, we will notify you via email.
        </p>
        <div style="margin: 30px 0;">
          <a href="http://localhost:3000/" style="display: inline-block; padding: 12px 25px; font-size: 16px; font-weight: bold; color: #ffffff; background-color: #6c63ff; border-radius: 5px; text-decoration: none;">
            Visit SafeSpace
          </a>
        </div>
        <p style="font-size: 14px; color: #777;">
          Thank you for being a part of our community!<br>
          <strong>- The SafeSpace Team</strong>
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// runs when a user receives a response to their question
export const sendExpertResponseNotification = (userEmail, questionTitle, questionPath) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'group19hackathon@gmail.com',
      pass: 'ehdd kber ntku koeo',
    },
  });

  let mailOptions = {
    from: 'group19hackathon@gmail.com',
    to: userEmail,
    subject: `Response to Your Question: ${questionTitle}`, 
    html: `
      <div style="font-family: 'Arial', sans-serif; background-color: #ffffff; padding: 20px; text-align: center; border: 1px solid #ddd; border-radius: 15px; max-width: 600px; margin: auto;">
        <h1 style="font-size: 24px; color: #333; margin-bottom: 10px;">You Have a New Response to Your Question!</h1>
        <p style="font-size: 16px; color: #555; margin-bottom: 20px; line-height: 1.5;">
          Hi, we wanted to let you know that there is a new response to your question titled: <strong>"${questionTitle}"</strong>.
        </p>
        <div style="margin: 30px 0;">
          <a href= "${questionPath}" style="display: inline-block; padding: 12px 25px; font-size: 16px; font-weight: bold; color: #ffffff; background-color: #6c63ff; border-radius: 5px; text-decoration: none;">
            View Your Question on SafeSpace
          </a>
        </div>
        <p style="font-size: 14px; color: #777;">
          Thank you for being a part of our community!<br>
          <strong>- The SafeSpace Team</strong>
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};


// runs when a user response to the expert's response
export const sendRegularUserResponseNotification = (userEmail, questionTitle, questionPath) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'group19hackathon@gmail.com',
      pass: 'ehdd kber ntku koeo',
    },
  });

  let mailOptions = {
    from: 'group19hackathon@gmail.com',
    to: userEmail,
    subject: `Follow-Up Response to Your Expert's Answer for the Question: ${questionTitle}`, 
    html: `
      <div style="font-family: 'Arial', sans-serif; background-color: #ffffff; padding: 20px; text-align: center; border: 1px solid #ddd; border-radius: 15px; max-width: 600px; margin: auto;">
        <h1 style="font-size: 24px; color: #333; margin-bottom: 10px;">You Have a New Response from a User!</h1>
        <p style="font-size: 16px; color: #555; margin-bottom: 20px; line-height: 1.5;">
          Hi, we wanted to let you know that there is a new follow-up response to the question titled: <strong>"${questionTitle}"</strong>.
        </p>
        <div style="margin: 30px 0;">
          <a href= "${questionPath}" style="display: inline-block; padding: 12px 25px; font-size: 16px; font-weight: bold; color: #ffffff; background-color: #6c63ff; border-radius: 5px; text-decoration: none;">
            View The Question on SafeSpace
          </a>
        </div>
        <p style="font-size: 14px; color: #777;">
          Thank you for being a part of our community!<br>
          <strong>- The SafeSpace Team</strong>
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

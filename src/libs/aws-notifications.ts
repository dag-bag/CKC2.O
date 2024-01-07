// pages/api/sendNotification.js
import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-south-1",
  accessKeyId: "AKIAXYKJUEY7HVUC5COD",
  secretAccessKey: "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",
});

const sns = new AWS.SNS();

export const sms = async () => {
  const params = {
    TargetArn: "arn:aws:sns:ap-south-1:533267228222:ckc",
    Message: "TEST",
  };

  sns.publish(params, (err, data) => {
    if (err) {
      console.error("Error publishing SNS message", err);
      // res.status(500).json({ error: "Failed to send push notification" });
    } else {
      console.log("SNS message published successfully", data);
      // res.status(200).json({ success: true });
    }
  });

  // res.status(405).json({ error: "Method not allowed" });
};

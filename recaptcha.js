require("dotenv").config();
const express = require("express");
const {
  RecaptchaEnterpriseServiceClient,
} = require("@google-cloud/recaptcha-enterprise");

const app = express();
app.use(express.urlencoded({ extended: true })); // parse form fields

const client = new RecaptchaEnterpriseServiceClient();
const projectId = process.env.GCLOUD_PROJECT_ID;
const siteKey = process.env.RECAPTCHA_SITE_KEY;

async function verifyRecaptcha(token) {
  const parent = client.projectPath(projectId);

  const request = {
    parent,
    assessment: {
      event: {
        token,
        siteKey,
      },
    },
  };

  const [assessment] = await client.createAssessment(request);

  if (!assessment.tokenProperties?.valid) {
    return { ok: false, reason: assessment.tokenProperties?.invalidReason };
  }

  return { ok: true };
}

app.post("/submit", async (req, res) => {
  try {
    const token = req.body["g-recaptcha-response"]; // checkbox token
    if (!token) {
      return res.status(400).send("Missing captcha token");
    }

    const result = await verifyRecaptcha(token);

    if (!result.ok) {
      return res.status(400).send("Captcha failed: " + result.reason);
    }

    // ✅ Captcha passed → process form here
    res.send("Form submitted successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error verifying captcha");
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));

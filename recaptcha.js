import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.post("/verify-captcha", async (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res.status(400).json({ verified: false, error: "Missing token" });
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      res.json({ verified: true });
    } else {
      res.status(400).json({ verified: false, errors: data["error-codes"] });
    }
  } catch (error) {
    res.status(500).json({ verified: false, error: "Verification failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

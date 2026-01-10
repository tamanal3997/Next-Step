const express = require("express");
const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("GEMINI FULL RESPONSE:", data);

    // If no candidates are returned
    if (!data.candidates || data.candidates.length === 0) {
      return res.json({ reply: "AI did not return a reply." });
    }

    const reply = data.candidates[0].content.parts[0].text;
    res.json({ reply });

  } catch (error) {
    console.error("GEMINI ERROR:", error);
    res.status(500).json({ reply: "AI server error" });
  }
});

module.exports = router;

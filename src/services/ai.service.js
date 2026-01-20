const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateCaption(base64ImageFile, mimeType = "image/jpeg") {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent([
    {
      inlineData: {
        data: base64ImageFile,
        mimeType,
      },
    },
    "Generate a short creative caption under 10 words with emojis and hashtags.",
  ]);

  return result.response.text();
}

module.exports = { generateCaption };

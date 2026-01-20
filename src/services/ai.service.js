const { GoogleGenAI } = require("@google/genai");

// Initialize client with API key from env
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateCaption(base64ImageFile) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is missing");
    }

    const model = ai.models.get("gemini-2.0-flash-exp");

    const result = await model.generateContent({
        contents: [
            {
                role: "user",
                parts: [
                    {
                        inlineData: {
                            mimeType: "image/jpeg",
                            data: base64ImageFile,
                        },
                    },
                    {
                        text: "You are an expert at generating captions for images. Produce one short, relevant caption with hashtags and emojis, concise and on-topic.",
                    },
                ],
            },
        ],
    });

    return result.response.text();
}

module.exports = { generateCaption };










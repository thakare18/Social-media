const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateCaption(base64ImageFile) {
const contents = [
{
inlineData: {
mimeType: "image/jpeg",
data: base64ImageFile,
},
},
{ text: "Caption this image." },
];

const response = await ai.models.generateContent({
model: "gemini-3-flash-preview",
contents: contents,
});
console.log(response.text);

return response.text;

}
// abstraction methodology use
module.exports = generateCaption 
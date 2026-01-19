const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateCaption(base64ImageFile){
    const contents = [
        {
            inlineData : {
                mimeType: "image/jpeg",
                data : base64ImageFile,
            },
        },
        {text: "Caption this image."},
    ];


const responce = await ai.models.generateContent({
    model : "gemini-2.5-flash",
    contents : contents,
    config: {
        systemInstruction: `You are a expert for generrating a caption for the images. 
        You must generate a single caption for the given images.
         Your caption should be short and concise.
         You can use hashtags and emojis for making a more attractive caption.`
    }
    
});
return responce.text;
}

module.export = generateCaption;










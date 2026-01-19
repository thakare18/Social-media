const postModel = require('../models/post.model');
const { generateCaption } = require('../service/ai.service');



async function createPostController(req, res) {
    try {
        const file = req.file;
        
        if (!file) {
            return res.status(400).json({ message: "No image file provided" });
        }
        
        console.log("File received in controller:", file);

        const base64Image = Buffer.from(file.buffer).toString('base64');
        const caption = await generateCaption(base64Image);
        
        console.log("Sending response with caption:", caption);
        return res.status(200).json({ 
            success: true,
            caption 
        });
    } catch (error) {
        console.error("Error in createPostController:", error);
        return res.status(500).json({ 
            success: false,
            message: "Failed to generate caption",
            error: error.message 
        });
    }
}


module.exports = { createPostController };
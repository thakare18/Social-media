const postModel = require('../models/post.model');
const { generateCaption } = require('../services/ai.service');
const { uploadFile } = require('../services/storage.service');
const { v4: uuidv4 } = require('uuid');




async function createPostController(req, res){
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: "Image file is required" });
        }
        console.log("file received", file);

        const base64Image = Buffer.from(file.buffer).toString('base64');

        const caption = await generateCaption(base64Image);
        const result = await uploadFile(file.buffer, `${uuidv4()}`);

        const post = await postModel.create({
            caption: caption,
            imageUrl: result.url,
            user : req.user._id
        })

        return res.status(201).json({
            message: "Post created successfully",
            post: post,
            caption,
            imageUrl: result.url
        });
    } catch (err) {
        console.error("createPostController error", err);
        return res.status(500).json({ message: "Failed to create post", error: err.message });
    }
}



module.exports = { 
    createPostController
}
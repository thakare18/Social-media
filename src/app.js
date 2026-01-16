const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./controllers/post.controller');



const app = express();
app.use(express.json());
app.use(cookieParser());


//base url

app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);



module.exports = app;
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');
const authRoutes = require('./src/routes/auth.routes');


connectDB();
app.use('/auth', authRoutes);




app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})



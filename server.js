import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './DB.js';

dotenv.config();

const port = process.env.PORT || 8900;


await connectDB();
app.listen(port,()=>{
    console.log(`Server is Running: localhost:${port}`);
})

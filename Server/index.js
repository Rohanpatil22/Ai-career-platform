import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './Routes/authRoutes.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{

    console.log('iside get route')
res.send('<h1>Server is running</h1>');
})

app.use('/api/auth',authRoutes);

const PORT=process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

})
.catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});
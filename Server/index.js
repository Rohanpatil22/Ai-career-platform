const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{

res.send('Server is running');
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{

console.log(`Server is running on port ${PORT}`);
});

try{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    
} catch(err){
        console.log('Error connecting to MongoDB:', err);
    };
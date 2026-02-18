import mongoose from 'mongoose';

const ResumeSchema= new mongoose.Schema({

    user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },

    rawText:{

        type:String,
        required:true,

    },

    originalFile:{

        type:String,
        required:true,
    }
},{timeStamps:true});

const Resume=mongoose.model('Resume',ResumeSchema);
export default Resume;
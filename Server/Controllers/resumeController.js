import fs from 'fs';
import { createRequire } from "module";
import mammoth from 'mammoth';
import Resume from '../models/Resume.js'; 

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");


export const uploadresume=async(req, res)=>{

    try{
        if(!req.file)
        {
            return res.status(400).json({message:"No file uploaded"});
        }

        let filePath=req.file.path;
        let extractedText;

        //PDF file
        if (req.file.mimetype === "application/pdf") {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        extractedText = data.text;
        }

        //DOCX file
      
        else if (req.file.mimetype ==="application/vnd.openxmlformats-officedocument.wordprocessingml.document") 
        {
            const result = await mammoth.extractRawText({ path: filePath });
            extractedText = result.value;
        }

        const resume = await Resume.create({
        user: req.user._id,
        rawText: extractedText,
        originalFile: req.file.filename,
        });

        res.status(201).json({
        message: "Resume uploaded successfully",
        resume,
        });

    }catch(error){

        return res.status(500).json({message:error.message});
    }

}
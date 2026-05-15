import fs from 'fs';
import { createRequire } from "module";
import mammoth from 'mammoth';
import Resume from '../models/Resume.js'; 

import { GoogleGenerativeAI } from "@google/generative-ai";


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
        else {
            return res.status(400).json({
            message: "Unsupported file type",
        });
    }


    const analysis = await analyzeResume(extractedText);

    console.log("Resume Analysis:", analysis);
    //console.log("Extracted Text:", extractedText);
        const resume = await Resume.create({
        user: req.user._id,
        rawText: extractedText,
        analysis,
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

const analyzeResume = async (resumeText) => {

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
  const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

    const prompt = `
You are an ATS resume evaluator.

Analyze the following resume and provide:

1. Resume score out of 100
2. ATS compatibility score
3. Strengths
4. Weaknesses
5. Missing skills
6. Suggestions for improvement

Resume:
${resumeText}
`;

const result = await model.generateContent(prompt);

    return result.response.text();

  } catch (error) {
    throw new Error(error.message);
  }

};
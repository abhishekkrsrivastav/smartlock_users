import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import db from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import keywordRoutes from './routes/keywordRoutes.js' 
 

const app=express();
// dotenv
dotenv.config();

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
 

// routes for user
app.use('/api/user', userRoutes);

// routes for keywords
app.use('/api', keywordRoutes)



// app.post("/process-command", async (req, res) => {
//     try {
//       const { command } = req.body;
  
//       if (!command) {
//         return res.status(400).json({ success: false, message: "Command is required" });
//       }
  
//       // 🔍 Step 1: Find Keyword in `keywords` Table
//       const [keywordResult] = await db.query(
//         "SELECT keyword_id FROM keywords WHERE keyword_name = ?",
//         [command]
//       );
  
//       if (keywordResult.length === 0) {
//         return res.status(404).json({ success: false, message: "No matching keyword found" });
//       }
  
//       const keywordId = keywordResult[0].keyword_id;
  
//       // 🔍 Step 2: Fetch Question from `questions` Table
//       const [questionResult] = await db.query(
//         "SELECT question_id, question_text FROM questions WHERE keyword_id = ?",
//         [keywordId]
//       );
  
//       if (questionResult.length === 0) {
//         return res.status(404).json({ success: false, message: "No question found for this keyword" });
//       }
  
//       return res.json({ 
//         success: true, 
//         question: questionResult[0].question_text, 
//         question_id: questionResult[0].question_id 
//       });
  
//     } catch (error) {
//       console.error("Error processing command:", error);
//       res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
//   });
  

//   app.post("/process-answer", async (req, res) => {
//     try {
//       const { question_id, answer } = req.body;
  
//       if (!question_id || !answer) {
//         return res.status(400).json({ success: false, message: "Question ID and Answer are required" });
//       }
  
//       // 🔍 Step 1: Find Answer ID
//       const [answerResult] = await db.query(
//         "SELECT answer_id FROM answers WHERE answer_text = ?",
//         [answer]
//       );
  
//       if (answerResult.length === 0) {
//         return res.status(404).json({ success: false, message: "No matching answer found" });
//       }
  
//       const answerId = answerResult[0].answer_id;
  
//       // 🔍 Step 2: Fetch Response from `responses` Table
//       const [responseResult] = await db.query(
//         "SELECT response_text FROM responses WHERE question_id = ? AND answer_id = ?",
//         [question_id, answerId]
//       );
  
//       if (responseResult.length === 0) {
//         return res.status(404).json({ success: false, message: "No response found" });
//       }
  
//       return res.json({ success: true, response: responseResult[0].response_text });
  
//     } catch (error) {
//       console.error("Error processing answer:", error);
//       res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
//   });
  
 
  


// port
const PORT = process.env.PORT || 8888;

//  conditionally listen
db.query('SELECT 1').then(()=>{

    // mysql
    console.log('MYSQL DB Connected');
    
    
    // listen
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
}).catch((error)=>{
    console.log(error);
    
})



import db from "../config/db.js";


export const getResponse = async (req, res) => {
    // try {
    //     const { keyword } = req.body;

    //     if (!keyword) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "keyword is required",
    //         })
    //     }

    //     // checking keyword is exists in keyword table
    //     const [keywordResult] = await db.query("SELECT keyword_id FROM keywords WHERE keyword_name = ?", [keyword]);
 
    //     if (keywordResult.length === 0) {
    //         return res.status(404).json({
    //             success: false,
    //             message: "No matching keyword found",
    //         })
    //     }

    //     const keywordId = keywordResult[0].keyword_id;

    //     const [responseResult] = await db.query("SELECT question_response FROM responses WHERE keyword_id = ?", [keywordId]);
         
        
    //     if (responseResult.length === 0) {
    //         return res.status(404).json({
    //             success: false,
    //             message: "No response found for this keyword",
    //         })
    //     }

    //     return res.json({
    //         success: true,
    //         response: responseResult[0].question_response,
    //     });

    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         success: false,
    //         message: 'Error in get all  API',
    //         error
    //     })

    // }


    
}
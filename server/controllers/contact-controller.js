const Contact = require("../models/contact-model");


const contatcForm=async (req,res)=>{
   try {
    const response =req.body       
    console.log("contactForm",response)
    await Contact.create(response)
    return res.status(201).json({msg:"Message Sent"});
   } catch (error) {
    return res.status(500).json({msg:"Message Not Sent"});
   }
}

module.exports=contatcForm;
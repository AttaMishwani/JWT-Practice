const Contact = require("../models/contact-model")

const contactForm  = async (req ,res)=>{
try {

    const data  = req.body;
    await Contact.create(data);
    return res.status(200).json({message :"message sent successfully"});

} catch (error) {
    return res.status(500).json({message : "message not delivered"});
}

}

module.exports = contactForm
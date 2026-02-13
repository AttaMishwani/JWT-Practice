const  {Schema , model, default: mongoose, mongo} = require("mongoose");

const contactSchema = new mongoose.Schema({
    username : {type: String , required : true},
    email : {type : String , required : true},
    message : {type: String , required : true}
});

module.exports = mongoose.model("Contact" , contactSchema)
const Mongoose = require("mongoose");

const UserSchema = Mongoose.Schema({
    user_name:String,
    pwd:String,
    type: String,
    user_code: String,
    name: String,
    dui:String,
    tel:String,
    email:String,
})

module.exports=Mongoose.model("User", UserSchema);
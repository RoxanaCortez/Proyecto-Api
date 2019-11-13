const Mongoose = require("mongoose");

const RegisterSchema = Mongoose.Schema({
    nombre:String,
    documento:String,
    tipo: String,
    placa: String,
    descripcion: String,
    horafecha:Date,
})

module.exports=Mongoose.model("Register", RegisterSchema);
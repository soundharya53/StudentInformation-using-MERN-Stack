const { default: mongoose } = require("mongoose");
const regSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        fathername:{
            type: String,
            required:true,
        },
        birth:{
            type:String,
            required: true,
        },
        address: {
          type: String,
          required: true,
        },
        phonenum: {
          type: String,
          required: true,
    },
},
    {
        timestamp: true,
    }
);
const Reg=mongoose.model('Reg',regSchema);
module.exports = {Reg};
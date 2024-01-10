const express=require("express");
const cors=require("cors");
const {mongoose } = require('mongoose');
const app=express();
app.use(express.json());
app.use(cors());
const { mongoDBURL, PORT } = require('./Config.js');
const {Reg} = require('./models/regModel.js');

app.post('/regs',async(req,res)=>{
    try{
    if(!req.body.name||!req.body.fathername||!req.body.birth||!req.body.address||!req.body.phonenum)
    {
        return res.status(400).send({message:"please enter values for all fields"})
    }
    const newSche={
        name:req.body.name,
        fathername:req.body.fathername,
       birth:req.body.birth,
       address:req.body.address,
       phonenum:req.body.phonenum,

    };
    const newDocument = new Reg(newSche);
const register = await newDocument.save();
        return res.status(200).send(register);
}
catch(error){
    console.log(error.message);
    return res.status(500).send({message:error.message});
};   
});

app.get('/regs',async(req,res)=>{
    try{
   // const newDocument = new Reg();
    const register = await Reg.find({})
        return res.status(200).json(register);
    }  
        catch(error){
            console.log(error.message);
            return res.status(500).send({message:error.message});
        };     
})

app.get('/regs/:id',async(req,res)=>{
    try{
   // const newDocument = new Reg();
   const {id}=req.params;
    const register = await Reg.findById(id);
        return res.status(200).json(register);
    }  
        catch(error){
            console.log(error.message);
            return res.status(500).send({message:error.message});
        };     
})

app.put('/regs/:id',async(req,res)=>{

   // const newDocument = new Reg();
   const {id}=req.params;
    const register = await Reg.findByIdAndUpdate(id);
    if(!register)
    {
        return res.status(400).send({message:'Id not found',})
    }
    else{
        return res.status(200).send({message:'Id found data updated succesfully',})
    }
    
})

app.delete('/regs/:id',async(req,res)=>{

    // const newDocument = new Reg();
    const {id}=req.params;
     const register = await Reg.findByIdAndDelete(id);
     if(!register)
     {
         return res.status(400).send({message:'Id not found',})
     }
     else{
         return res.status(200).send({message:'Id found data deleted succesfully',})
     }
     
 })
mongoose.connect(mongoDBURL)
.then(()=>{
    console.log(`app is connected to the database`)
    app.listen(PORT,()=>{
        console.log("succes");
    })
}
)
.catch((error)=>{
    console.log(error.message);
})


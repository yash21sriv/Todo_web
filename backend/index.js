const express=require("express");
const cors=require('cors');
const {createTodo,updateTodo}=require("./types.js");
const { todo } = require('./db.js');
const App=express();
App.use(cors());
App.use(express.json());
App.get("/todos",async(req,res)=>{
    const todos=await todo.find({});
    console.log(todos);
    res.json({
        todos
    })

    
});
App.post("/todo",async(req,res)=>{
    const createpayload=req.body;
    const payload=createTodo.safeParse(createpayload)
    if(payload.Sucess){
        console.log("Validation error:", payload.error); 
        res.status(411).json({
            msg:"invalid input",
            error:payload.error
        });
        return ;
    }
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
    })
    res.json({
        msg:"done"
    })

});
App.put("/completed",async (req,res)=>{
    const update=req.body;
    const updatepayload=updateTodo.safeParse(update);
    if(!updatepayload.sucess){
        res.status(411).json({
            msg:"invalid input"
        })
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    console.log("todo done");
});
App.listen(3000);



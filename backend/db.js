const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://yash21srivastava:y4PkZGdrTrf9YnYu@learning.upotv.mongodb.net/todos');
const todoSchema= mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})
const todo= mongoose.model('todos',todoSchema);
module.exports={
    todo
}
const mongoose=require('mongoose')


const projectScema=new mongoose.Schema({
name:String,
image:String,

    
})

module.exports=mongoose.model('project',projectScema)
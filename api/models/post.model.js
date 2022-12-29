const mongoose=require("mongoose");

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));


const postSchema=mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    p_date:{
        type:String,
        default:event.toLocaleString('en-GB', { timeZone: 'UTC' })
    },
    author:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    tags:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
})
module.exports=mongoose.model("post",postSchema);
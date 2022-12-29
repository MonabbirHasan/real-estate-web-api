const mongoose=require("mongoose");

const categorySchema=mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    c_name:{
        type:String,
        require:true
    },
    c_image:{
        type:String,
        require:true
    },
    is_sub:{
        type:String,
        require:true
    },
    c_date:{
        type:String,
        require:true
    },
    c_status:{
        type:String,
        require:true
    },
});

module.exports=mongoose.model("category",categorySchema);
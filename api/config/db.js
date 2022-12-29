const mongoose=require("mongoose");
const config=require("./config")

const dbULR=config.db.url;

mongoose.connect(dbULR).then(()=>{
    console.log("databse is connected")
}).catch((error)=>{
    console.log(error)
    process.exit(1)
})
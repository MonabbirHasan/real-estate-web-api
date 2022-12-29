require("dotenv").config();

const dev={
    app:{
        port: process.PORT || 4000
    },
    db:{
        url:process.env.DB_URL
    }
}


module.exports=dev;
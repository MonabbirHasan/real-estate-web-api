const app=require('./app.js')
const config=require('./config/config')
const PORT=config.app.port;
app.listen(PORT,()=>{
    console.log("server run server: localhost:4000");
});
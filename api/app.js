const express = require('express')
const cors = require('cors')
require('./config/db')
const app = express()
const categoryRouter = require('./routes/category.route')
const postRouter = require('./routes/post.router')
const userRouter = require('./routes/user.router')
const memberRouter = require('./routes/member.router')
const commentRouter = require('./routes/comment.router')
const propertyRouter = require('./routes/property.router')
const RcommentRouter = require('./routes/Rcomment.router')
const uploadRouter=require("./routes/upload.router")
// const multer=require("multer")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// category api
app.use('/api/category',categoryRouter)
app.use('/api/post', postRouter)
app.use('/api/user', userRouter)
app.use('/api/member', memberRouter)
app.use('/api/comment', commentRouter)
app.use('/api/property', propertyRouter)
app.use('/api/rcomment', RcommentRouter)
app.use('/api/upload',uploadRouter)
// api/category :GET
// api/category/ post
// api/category/:patch
// api/category/:delete


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/./views/index.html')
})
// route error
app.use('/', (req, res, next) => {
  res.status(404).json({ message: 'this rout is not found!' })
})
// server error
app.use('/', (error, req, res, next) => {
  res.status(404).json({ message: 'somthing is wrong with server' })
})

module.exports = app

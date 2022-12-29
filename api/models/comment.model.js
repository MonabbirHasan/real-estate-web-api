const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  post_name: {
    type: Number,
    require: true,
  },
  reply_comment: {
    type: Number,
    require: true,
  },
  user_type: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  status: {
    type: Number,
    require: true,
  },
})

module.exports = mongoose.model('comment', commentSchema)

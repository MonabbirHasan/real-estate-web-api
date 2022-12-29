const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
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
  phone: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  member_type: {
    type: Number,
    require: true,
  },
  status: {
    type: Number,
    require: true,
  },
})

module.exports = mongoose.model('member', MemberSchema)

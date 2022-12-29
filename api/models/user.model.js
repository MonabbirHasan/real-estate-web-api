const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
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
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  cuntry: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  zipcode: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  baiodata: {
    type: String,
    require: true,
  },
  user_type: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
})
module.exports=mongoose.model("users",userSchema);
const mongoose = require('mongoose')
const propertySchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  owner_name: {
    type: String,
    require: true,
  },
  owner_email: {
    type: String,
    require: true,
  },
  owner_phone: {
    type: Number,
    require: true,
  },
  owner_address: {
    type: String,
    require: true,
  },
  zipcode: {
    type: Number,
    require: true,
  },
  house_size: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  owner_image: {
    type: String,
    require: true,
  },
  total_badroom: {
    type: Number,
    require: true,
  },
  total_room: {
    type: Number,
    require: true,
  },
  design_name: {
    type: String,
    require: true,
  },
  house_type: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  foundation_type: {
    type: String,
    require: true,
  },
  perkingloot: {
    type: String,
    require: true,
  },
  house_year: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Number,
    default: Date.now,
  },
  status: {
    type: Number,
    require: true,
  },
})

module.exports = mongoose.model('property', propertySchema)

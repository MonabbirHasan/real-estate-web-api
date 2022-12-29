const { v4: uuidv4 } = require('uuid')
const Propertys = require('../models/property.model')

const GetAllProperty = async (req, res) => {
  try {
    const GetAll = await Propertys.find()
    res.status(200).json(GetAll)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetOneProperty = async (req, res) => {
  try {
    const GetSingle = await Propertys.findOne({ id: req.params.id })
    res.status(200).json(GetSingle)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateProperty = async (req, res) => {
  try {
    const newProperty = Propertys({
      id: uuidv4(),
      owner_name: req.body.name,
      owner_email: req.body.email,
      image: req.body.image,
      owner_image: req.body.owner_image,
      owner_phone: Number(req.body.phone),
      owner_address: req.body.address,
      zipcode: Number(req.body.zipcode),
      house_size: Number(req.body.size),
      total_badroom: Number(req.body.badroom),
      total_room: Number(req.body.room),
      design_name: req.body.design_name,
      house_type: req.body.house_type,
      location: req.body.location,
      price: Number(req.body.price),
      foundation_type: req.body.foundation_type,
      perkingloot: req.body.perkingloot,
      house_year: req.body.house_year,
      status: Number(req.body.status),
    })
    await newProperty.save()
    res.status(201).json(newProperty)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateProperty = async (req, res) => {
  try {
    const Uproperty = await Propertys.findOne({ id: req.params.id })
    Uproperty.id = uuidv4()
    Uproperty.owner_name = req.body.name
    Uproperty.owner_email = req.body.email
    Uproperty.image = req.body.image
    Uproperty.owner_image = req.body.owner_image
    Uproperty.owner_phone = Number(req.body.phone)
    Uproperty.owner_address = req.body.address
    Uproperty.zipcode = Number(req.body.zipcode)
    Uproperty.house_size = Number(req.body.size)
    Uproperty.total_badroom = Number(req.body.badroom)
    Uproperty.total_room = Number(req.body.room)
    Uproperty.design_name = req.body.design_name
    Uproperty.house_type = req.body.house_type
    Uproperty.location = req.body.location
    Uproperty.price = Number(req.body.price)
    Uproperty.foundation_type = req.body.foundation_type
    Uproperty.perkingloot = req.body.perkingloot
    Uproperty.house_year = req.body.house_year
    Uproperty.status = Number(req.body.status)
    Uproperty.save()
    res.status(200).json(Uproperty)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteProperty = async (req, res) => {
  try {
    await Propertys.deleteOne({ id: req.params.id })
    res.status(200).json({ message: `Propery is Deleted successfully` })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  GetAllProperty,
  GetOneProperty,
  CreateProperty,
  UpdateProperty,
  DeleteProperty,
}

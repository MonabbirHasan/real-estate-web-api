const { v4: uuidv4 } = require('uuid')
const Users = require('../models/user.model')

const GetAllUser = async (req, res) => {
  try {
    const AllUser = await Users.find()
    res.status(200).json(AllUser)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetOneUser = async (req, res) => {
  try {
    const singleUser = await Users.findOne({ id: req.params.id })
    res.status(200).json(singleUser)
  } catch (error) {
    req.status(500).send(error.message)
  }
}

const CreateUser = async (req, res) => {
  try {
    const newUser = Users({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
      phone: Number(req.body.phone),
      cuntry: req.body.cuntry,
      address: req.body.address,
      zipcode: Number(req.body.zipcode),
      age: Number(req.body.age),
      designation: req.body.designation,
      baiodata: req.body.baiodata,
      user_type: req.body.user_type),
      status: Number(req.body.status),
    })
    await newUser.save()
    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const UpdateUser = async (req, res) => {
  try {
    const UpUser = await Users.findOne({ id: req.params.id })
    UpUser.name = req.body.name
    UpUser.email = req.body.email
    UpUser.image = req.body.image
    UpUser.cuntry = req.body.cuntry
    UpUser.address = req.body.address
    UpUser.zipcode = req.body.zipcode
    UpUser.age = req.body.age
    UpUser.designation = req.body.designation
    UpUser.baidata = req.body.baidata
    UpUser.user_type = req.body.user_type
    UpUser.status = req.body.status
    UpUser.save()
    res.status(200).json(UpUser)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ id: req.params.id })
    // await Users.deleteMany()
    res.status(200).json({ message: 'delete user' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = { GetAllUser, GetOneUser, CreateUser, UpdateUser, DeleteUser }

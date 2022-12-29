const { v4: uuidv4 } = require('uuid')
const categorys = require('../models/category.model')
// const uploadsfile=require("../Uploads");
// gett all categorys
const GetAllCategory = async (req, res) => {
  try {
    const getCategorys = await categorys.find()
    res.status(200).json(getCategorys)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
// get all categorys

// get single categorys
const GetOneCategory = async (req, res) => {
  try {
    const singleCategorys = await categorys.findOne({ id: req.params.id })
    res.status(200).json(singleCategorys)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
// get single categorys
// category careate

const CreateCategory =async(req, res) => {
  try {
    const newCategoroy = categorys({
      id: uuidv4(),
      c_name: req.body.c_name,
      c_image:req.body.c_image,
      is_sub: req.body.is_sub,
      c_date: req.body.c_date,
      c_status:req.body.c_status,
    })
    await newCategoroy.save()
    res.status(201).json(newCategoroy)
    // res.status(201).json("file is uploaded")
  } catch (error) {
    res.status(500).send(error.message)
  }
}
// category create
const UpdateCategory = async (req, res) => {
  try {
    const singleCategorys = await categorys.findOne({ id: req.params.id })
    singleCategorys.c_name = req.body.c_name
    singleCategorys.c_image = req.body.c_image
    singleCategorys.is_sub = req.body.is_sub
    singleCategorys.c_date = req.body.c_date
    singleCategorys.c_status = req.body.c_status
    singleCategorys.save()
    res.status(200).json({ message: 'category updated' })
  } catch (error) {res.status(500).send(error.message)}
}

const DeleteCategory = async (req, res) => {
  try {
    await categorys.deleteOne({ id: req.params.id })
    // await categorys.deleteMany()
    res.status(200).json({ message: 'category deleted' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  GetAllCategory,
  GetOneCategory,
  CreateCategory,
  UpdateCategory,
  DeleteCategory,
}

const { v4: uuidv4 } = require('uuid')
const Rcomments = require('../models/Rcomment.model')

const GetAllComment = async (req, res) => {
  try {
    const GetAll = await Rcomments.find()
    res.status(200).json(GetAll)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetOneComment = async (req, res) => {
  try {
    const Getsingle = await Rcomments.findOne({ id: req.params.id })
    res.status(200).json(Getsingle)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateComment = async (req, res) => {
  try {
    const newComment = Rcomments({
      id: uuidv4(),
      name: req.body.name,
      image: req.body.image,
      email: req.body.email,
      comment: req.body.comment,
      post_name: Number(req.body.post_name),
      user_type: Number(req.body.user_type),
      desc: req.body.desc,
      status: Number(req.body.status),
    })
    await newComment.save()
    res.status(201).json(newComment)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateComment = async (req, res) => {
  try {
    const UpRComment =await Rcomments.findOne({ id: req.params.id })
    UpRComment.id = uuidv4()
    UpRComment.name = req.body.name
    UpRComment.image = req.body.image
    UpRComment.email = req.body.email
    UpRComment.comment = req.body.comment
    UpRComment.post_name = Number(req.body.post_name)
    UpRComment.user_type = Number(req.body.user_type)
    UpRComment.desc = req.body.desc
    UpRComment.status = Number(req.body.status)
    UpRComment.save()
    res.status(200).json(UpRComment)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteComment = async (req, res) => {
  try {
    await Rcomments.deleteOne({ id: req.params.id })
    res.status(200).json({ message: 'delete reply coommet' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  GetAllComment,
  GetOneComment,
  CreateComment,
  UpdateComment,
  DeleteComment,
}

const { v4: uuidv4 } = require('uuid')
const Comments = require('../models/comment.model')

const GetAllComment = async (req, res) => {
  try {
    const GetAll = await Comments.find()
    res.status(200).json(GetAll)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetOneComment = async (req, res) => {
  try {
    const GetSingle = await Comments.findOne({ id: req.params.id })
    res.status(200).json(GetSingle)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateComment = async (req, res) => {
  try {
    const newComment = Comments({
      id: uuidv4(),
      name: req.body.name,
      image: req.body.image,
      email: req.body.email,
      comment: req.body.comment,
      post_name: Number(req.body.post_name),
      reply_comment: Number(req.body.reply_comment),
      user_type: Number(req.body.user_type),
      desc: req.body.desc,
      status: req.body.status,
    })
    await newComment.save()
    res.status(200).json(newComment)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateComment = async (req, res) => {
  try {
    const UpComment = await Comments.findOne({ id: req.params.id })
    UpComment.id = uuidv4()
    UpComment.name = req.body.name
    UpComment.image = req.body.image
    UpComment.email = req.body.email
    UpComment.comment = req.body.comment
    UpComment.post_name = Number(req.body.post_name)
    UpComment.reply_comment = Number(req.body.reply_comment)
    UpComment.user_type = Number(req.body.user_type)
    UpComment.desc = req.body.desc
    UpComment.status = req.body.status
    UpComment.save()
    res.status(200).json(UpComment)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteComment = async (req, res) => {
  try {
    await Comments.deleteOne({ id: req.params.id })
    res.status(200).json({ message: `comment is deleted successfull` })
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

const { v4: uuidv4 } = require('uuid')
const Posts = require('../models/post.model')

const GetAllPost = async (req, res) => {
  try {
    const AllPost = await Posts.find()
    res.status(200).json(AllPost)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetOnPost = async (req, res) => {
  try {
    const singlePost = await Posts.findOne({ id: req.params.id })
    res.status(200).json(singlePost)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// news post
const CreatePost = async (req, res) => {
  try {
    const newpost = Posts({
      id: uuidv4(),
      title: req.body.title,
      image: req.body.image,
      author:req.body.author,
      category: req.body.category,
      tags: req.body.tags,
      desc: req.body.desc,
      status:req.body.status,
    })
    await newpost.save()
    res.status(201).json(newpost)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

// new post
const UpdatePost = async (req, res) => {
  try {
    const UPost = await Posts.findOne({ id: req.params.id })
    UPost.title = req.body.title
    UPost.image = req.body.image
    UPost.author = req.body.author
    UPost.category = req.body.category
    UPost.tags = req.body.tags
    UPost.desc = req.body.desc
    UPost.status = req.body.status
    UPost.save()
    res.status(200).json(UPost)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeletePost = async (req, res) => {
  try {
    await Posts.deleteOne({ id: req.params.id })
    // await Posts.deleteMany()
    res.status(200).json({ message: 'post deleted' })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  GetAllPost,
  GetOnPost,
  CreatePost,
  UpdatePost,
  DeletePost,
}

const Member = require('../models/member.model')
const { v4: uuidv4 } = require('uuid')

const GetAllMember = async (req, res) => {
  try {
    const GetAll = await Member.find()
    res.status(200).json(GetAll)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const GetOneMember = async (req, res) => {
  try {
    const GetSingle = await Member.findOne({ id: req.params.id })
    res.status(200).json(GetSingle)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const CreateMember = async (req, res) => {
  try {
    const newMember = Member({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: req.body.image,
      designation: req.body.designation,
      address: req.body.address,
      member_type: req.body.member_type,
      status: req.body.status,
    })
    await newMember.save()
    res.status(200).json(newMember)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const UpdateMember = async (req, res) => {
  try {
    const UpdateMember = await Member.findOne({ id: req.params.id })
    UpdateMember.id = uuidv4()
    UpdateMember.name = req.body.name
    UpdateMember.email = req.body.email
    UpdateMember.phone = req.body.phone
    UpdateMember.image = req.body.image
    UpdateMember.designation = req.body.designation
    UpdateMember.address = req.body.address
    UpdateMember.member_type = req.body.member_type
    UpdateMember.status = req.body.status
    UpdateMember.save()
    res.status(200).json(UpdateMember)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const DeleteMember = async (req, res) => {
  try {
    const DeleteMember = await Member.deleteOne({ id: req.params.id })
    res
      .status(200)
      .json({ message: `member is delete successfully ${DeleteMember}` })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  GetAllMember,
  GetOneMember,
  CreateMember,
  UpdateMember,
  DeleteMember,
}

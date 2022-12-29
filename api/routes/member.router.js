const express = require('express')
const router = express.Router()
const {
  GetAllMember,
  GetOneMember,
  CreateMember,
  DeleteMember,
  UpdateMember,
} = require('../controllers/member.controller')

router.get('/', GetAllMember)
router.post('/', CreateMember)
router.get('/:id', GetOneMember)
router.delete('/:id', DeleteMember)
router.patch('/:id', UpdateMember)
module.exports = router

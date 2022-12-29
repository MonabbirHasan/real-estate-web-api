const express = require('express')
const router = express.Router()
const {
  GetAllUser,
  GetOneUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} = require('../controllers/user.controller')

router.get('/', GetAllUser)
router.post('/', CreateUser)
router.get('/:id', GetOneUser)
router.delete('/:id', DeleteUser)
router.patch('/:id', UpdateUser)

module.exports = router

const express = require('express')
const router = express.Router()
const {
  GetAllComment,
  GetOneComment,
  CreateComment,
  DeleteComment,
  UpdateComment,
} = require('../controllers/Rcomment.controller')

router.get('/', GetAllComment)
router.post('/', CreateComment)
router.get('/:id', GetOneComment)
router.delete('/:id', DeleteComment)
router.patch('/:id', UpdateComment)

module.exports = router

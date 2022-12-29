const express = require('express')
const router = express.Router()
const {
  GetAllComment,
  GetOneComment,
  CreateComment,
  DeleteComment,
  UpdateComment,
} = require('../controllers/comment.controller')

router.get('/', GetAllComment);
router.get('/:id', GetOneComment);
router.post('/', CreateComment);
router.delete('/:id', DeleteComment);
router.patch('/:id', UpdateComment);

module.exports = router

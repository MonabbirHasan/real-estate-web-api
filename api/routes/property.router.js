const express = require('express')
const router = express.Router()
const {
  GetAllProperty,
  GetOneProperty,
  DeleteProperty,
  UpdateProperty,
  CreateProperty,
} = require('../controllers/property.controller')

router.get('/', GetAllProperty)
router.post('/', CreateProperty)
router.get('/:id', GetOneProperty)
router.delete('/:id', DeleteProperty)
router.patch('/:id', UpdateProperty)

module.exports = router

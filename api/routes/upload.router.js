const express=require("express");
const uploadFiles = require("../controllers/upload.controller");
const router=express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    const newfilename = Date.now() + '-' + file.originalname
    cb(null, newfilename)
  },
})

const upload_name = multer({ storage: storage })

router.post("/",upload_name.single('file'),uploadFiles)


module.exports=router;
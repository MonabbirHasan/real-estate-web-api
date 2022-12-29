const express=require("express");
const { GetAllCategory, GetOneCategory, CreateCategory, DeleteCategory, UpdateCategory } = require("../controllers/category.controller");
const router=express.Router();


// console.log(upload_name.single('c_image'))
const multer = require('multer')

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/")
    },
    filename: function (req, file, cb) {
      const newfilename = Date.now() + '-' + file.originalname
      cb(null, newfilename)
    },
  })
  
  const upload_name = multer({ storage: storage })

router.get("/",GetAllCategory);
router.get("/:id",GetOneCategory);
router.delete("/:id",DeleteCategory)
router.post("/",upload_name.single('c_image'),CreateCategory);
router.patch("/:id",UpdateCategory)
module.exports=router
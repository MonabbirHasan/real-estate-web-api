const express=require("express");
const {GetAllPost,GetOnPost, CreatePost, DeletePost, UpdatePost} = require("../controllers/post.controller");
const router=express.Router();


router.get("/",GetAllPost);
router.get("/:id",GetOnPost);
router.post("/",CreatePost);
router.delete("/:id",DeletePost);
router.patch("/:id",UpdatePost);



module.exports=router;
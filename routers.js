const express = require ("express");
const { setPosts, getPosts, editPost, deletePost } = require("./controllers/post.controller");
const router = express.Router();
const app =express();

router.get("/" ,getPosts )

router.post("/" ,setPosts)

router.put("/:id" ,editPost)

router.delete("/:id",deletePost)


module.exports=router;



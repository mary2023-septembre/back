const PostModel =require("../Model/post.model")



module.exports.getPosts= async(req,res) =>{
    const products = await PostModel.find();
    
     res.status(400).json(products) ;


}

module.exports.setPosts= async(req,res) =>

{
// if (!req.body.message)
// {
//     res.status(400).json({message:"merci d'ajouter un message"}) ;
// }
const post = await PostModel.create({
    champs1: req.body.champs1 ,
    champs2 : req.body.champs2,
    champs3 : req.body.champs3,
    champs4 : req.body.champs4,
});

res.status(200).json(post);
};


module.exports.editPost= async(req,res) =>{
    const post = await PostModel.findById(req.params.id);
    if (!post){     res.status(400).json({message:"ce post n'existe pas"}) ;
}
const updatePost = await PostModel.findByIdAndUpdate(post , req.body,{new : true,})
res.status(200).json(updatePost)

} ; 
module.exports.deletePost= async(req,res) =>{
    const post = await PostModel.findById(req.params.id);
    if (!post){     res.status(400).json({message:"ce post n'existe pas"}) ;
}
await post.remove();
res.status(200).json("message supprimé"+post)

} ;

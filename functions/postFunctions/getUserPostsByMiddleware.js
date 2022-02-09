const Post = require("../../schemas/Post");
//postovi ulogovanog korisnika
module.exports = async (req, res) => {
  try {
    let posts = await Post.find();
    let userPosts = posts.filter(
      (post) => post.user.toString() === req.user.id.toString()
    );//id dolazi kao odgovor iz authentication fje u middlewaru
    res.json(userPosts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};

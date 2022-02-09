const Post = require("../../schemas/Post");

module.exports = async (req, res) => {
  try {
    //sortiramo ih od onih sa najvise do onih sa najmanje lajkova, po defaultu je 1, tj od najmanjeg do najveceg
    let posts = await Post.find().sort({ likes: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};

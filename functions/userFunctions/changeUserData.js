const { validationResult } = require("express-validator"); 
const User = require("../../schemas/User");

module.exports = async (req, res) => {
  try {
    const { changeUserData } = req.body;
    const errors = validationResult(req);
    let user = await User.findById(req.user.id).select("-password");

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    if (!user) return res.status(404).json("Korisnik nije nađen");

    //userDataToChange -> name,lastName,userName
    //uzimamo iz parametra, a konkretnu vrednost iz body
    let userDataToChange = req.params.user_data_to_change.toString();

    if (user[userDataToChange] === changeUserData.toString())
      return res.status(401).json("Ovo je podatak koji već imamo u bazi");

    user[userDataToChange] = changeUserData.toString();

    await user.save();

    res.json("Podatak promenjen");
  } catch (error) {
    console.error(error);
    return res.status(500).json("Server Error...");
  }
};

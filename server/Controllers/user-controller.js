const Users = require("../Models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  if (Users.exists(req.body.email) == true)
    return res.status(400).json({ massage: "email already exists" });
  bcrypt.hash(req.body.password, 10, async (err, hashPass) => {
    if (err) return res.status(500).json({ massage: "error in password hash" });
    req.body.password = hashPass;
    await Users.create(req.body)
      .then((result) => res.status(200).json({ massage: "succsfuly", result }))
      .catch((err) => res.status(500).json({ massage: err }));
  });
};

const login = async (req, res) => {
  if (Users.exists(req.body.email) == false)
    return res.status(400).json({ message: "Email not found" });
  try {
    const user = await Users.findOne({ email: req.body.email });
    bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: "Error" });
      if (!isMatch)
        return res.status(400).json({ message: "Password incorrect" });
      const token = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Login successful", token });
    });
  } catch (err) {
    return res.status(500).json(err);
  }
  
};
const getAllUsers = async (req, res) => {
  await Users.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json({ massage: err }));
};

const getUserById = async (req, res) => {
    await Users.findById(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  
  const addUser = async (req, res) => {
    await Users.create(req.body)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  
  const updateUser = async (req, res) => {
      Users.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
  .then(result=>{
  res.status(200).json(result)
  })
  .catch(err=>{
    res.status(500).json({massage:"update is failed"})
  })
  };
  
  const deleteUser = async (req, res) => {
      Users.findByIdAndRemove(req.params.id, (err, result) => {
          if (err) {
              return res.status(400).json({ success: false, error: err })
          };
          res.status(201).json({ success: true, data: result, message: "the  delete" })
      })
  };


module.exports = { register, login ,getAllUsers ,getUserById,addUser,updateUser,deleteUser};
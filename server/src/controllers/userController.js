import { UserModel } from "../models/userModel.js";

// Dummy data
let tishanaTrainor = UserModel({
  "image": "https://perscholas.org/wp-content/uploads/2021/11/GA_HS_November14_300-26-Tishana-J-Trainor-667x1000.jpg",
  "firstName": "Tishana",
  "lastName": "Trainor",
  "title": "Technical Instructor, National Remote Training",
  "bio": "Tishana Trainor is a Software Engineer specializing in Javascript, Angular framework, and .NET backend development. She lives in Alexandria, VA with her co-pilot, and enjoys sewing and Nintendo Switch games.",
  "course": "MERN - Software Engineering",
  "expertise": ["JavaScript", "Angular", "React", ".NET", "Node", "Express"],
  "qualification": ["General Assembly", "DeVry University"]
});

let manaraAli = UserModel({
  "image": "https://perscholas.org/wp-content/uploads/2021/10/IMG_5326-Manara-Ali-970x1000.jpeg",
  "firstName": "Manara AKA Mr. ES6, AKA The Goat",
  "lastName": "Ali",
  "title": "Instructional Assistant, RTT",
  "bio": "Manara Ali is a self driven and motivated programmer who graduated from Per Scholas Software Engineering bootcamp after spending the prior year and half teaching himself the basics of computer programming. Manara considers himself a lifelong learner who enjoys helping others reach their goals.",
  "course": "MERN - Software Engineering",
  "expertise": ["JavaScript", "Node", "Express", "React", "MongoDB", "Mongoose"],
  "qualification": ["Georgia Institute of Technology"]
});

let createUser = async (req, res) => {
  try {
    let userData = new UserModel(req.body);
    let saveUser = await userData.save();
    res.status(201).json(saveUser);
  } catch(error) {
    res.status(400).json({ "message": error.mesage });
  }
}

let readUser = async (req, res) => {
  try {
    let users = await UserModel.find();
    res.status(200).json(users);
  } catch(error) {
    res.status(500).json({ "message": error.message });
  }
}

let updateUser = async (req, res) => {
  try {
    let update = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json(update);
  } catch(error) {
    res.status(400).json({ "message": error.message });
  }
}

let deleteUser = async (req, res) => {
  try {
    let deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch(error) {
    res.status(500).json({ "message": error.message });
  }
}

let searchUser = async (req, res) => {
  const { name } = req.query;

  try {
    let searchedUser = await UserModel.find({ "name": name });
    res.json(searchedUser);
  } catch(error) {
    res.status(500).json({ "message": error.message });
  }
}

export { createUser, readUser, updateUser, deleteUser, searchUser };
import mongoose from "mongoose";

// Schema
const userSchema = new mongoose.Schema({
  "image": { "type": String, "required": true },
  "firstName": { "type": String, "required": true },
  "lastName": { "type": String, "required": true},
  "title": { "type": String, "required": true },
  "course": { "type": [String] },
  "expertise": { "type": [String] },
  "qualification": { "type": [String] },
  "bio": { "type": String }
});

export { userSchema };
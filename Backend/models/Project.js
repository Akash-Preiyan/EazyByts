const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  }
})
const Project = mongoose.model("Project", projectSchema)
module.exports = Project;
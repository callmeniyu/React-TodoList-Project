const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    item: String,
    done: {
        type: Boolean,
        default: "false",
    },
})

const todoModel = mongoose.model("Todo", todoSchema)

module.exports = todoModel

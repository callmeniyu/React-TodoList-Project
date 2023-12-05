const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const todoModel = require("./Models/todoModel")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/TodoDB")

app.post("/add", (req, res) => {
    todoModel
        .create({
            item: req.body.todo,
        })
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

app.get("/get", (req, res) => {
    console.log("hi");
    todoModel
        .find()
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    todoModel
        .findByIdAndUpdate({ _id: id }, { done: true })
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
})

app.listen(5000, () => console.log("Server Started running at port 5000"))

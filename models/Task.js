const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title:{
        unique: true,
        required: true,
        type: String
    },
    description:{
        type: String,
        required: true,
    },
    priority:{
        type: String,
        default: "Low",
        enum: ["Low", "Medium", "High"]
    },
    isCompletedTask:{
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
},
{
    timeStamps: true
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
const mongoose = require("mongoose");
const workoutSchema = new mongoose.Schema({
    workout:{
        type: String,
        required: true,    
    }
    // date:{
    //     type: Date,
    //     required: true,
    // }
});

const workoutModel = mongoose.model("workouts",workoutSchema )

module.exports = workoutModel;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Workout = require("./models/workouts")

app.use(express.json());
mongoose.connect(
    "mongodb+srv://NicUser:blueFish22@cluster0.rpusysn.mongodb.net/fitnessTracker?retryWrites=true&w=majority"
    );

    app.get("/getWorkouts", (req,res) => {
        Workout.find({}, (err,result) => {
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        });
    });
app.post("/createWorkout", async (req, res) => {
   const work = req.body
   const newWork = new Workout(work);
await newWork.save();

res.json(work)
});

app.listen(3001, () => {
    console.log("SERVER UP!");
});

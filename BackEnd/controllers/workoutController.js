const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

//GET ALL WORKOUT CONTROLLER
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts)
}

//GET A SINGLE WORKOUT CONTROLLER

const singleWorkout = async(req, res)=>{
    const {id} = req.params;
    const workout = await Workout.findById(id);
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Workout exists'})
}
    if(!workout){
        return res.status(404).json({error: 'No such workout' })
    }   
    return res.status(200).json(workout);
}

//CREATE A NEW WORKOUT CONTROLLER
const createWorkout = async(req, res) =>{
    const { title, load, reps } = req.body

    try {
        const workout = await Workout.create({
            title, load, reps
        })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

//DELETE A WORKOUT CONTROLLER


//UPDATE A WORKOUT CONTROLLER

module.exports = {
    createWorkout,
    getWorkouts,
    singleWorkout
}
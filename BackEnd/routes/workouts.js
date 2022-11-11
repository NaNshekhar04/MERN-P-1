const express = require('express');
const Workout = require('../models/workoutModel');
const router = require('express').Router();

// GET ALL THE WORKOUTS
router.get('/', function (req, res) {
    res.json({ msg: "get all requests!" })
})
// GET SINGLE WORKOUT
router.get('/:id', (req, res) => {
    res.json({ msg: "Go to jogg!" })
})

// POST A NEW WORKOUT
router.post('/', async (req, res) => {
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
})

// DELETE A WORKOUT
router.delete('/:id', (req, res) => {
    res.json({ msg: "delete a  workout" })
})

// UPDATE A WORKOUT
router.patch('/:id', (req, res) => {
    res.json({ msg: "Update a workout" })
})
module.exports = router
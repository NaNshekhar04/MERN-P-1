const express = require('express');
const router = require('express').Router();
const workController = require('../controllers/workoutController');

// GET ALL THE WORKOUTS
router.get('/', workController.getWorkouts);

// GET SINGLE WORKOUT
router.get('/:id', workController.singleWorkout);

// POST A NEW WORKOUT
router.post('/',workController.createWorkout);

// DELETE A WORKOUT
router.delete('/:id', workController.deleteWorkOut);

// UPDATE A WORKOUT
router.patch('/:id', workController.updateWorkOut);


module.exports = router
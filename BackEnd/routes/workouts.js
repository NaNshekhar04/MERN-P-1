const express = require('express');
const router = require('express').Router();

// GET ALL THE WORKOUTS
router.get('/', function(req, res){
    res.json({msg: "get all requests!"})
})
// GET SINGLE WORKOUT
router.get('/:id', (req, res)=>{
    res.json({msg:"Go to jogg!"})
})

// POST A NEW WORKOUT
router.post('/', (req, res)=>{
    res.json({msg:"post a new workout"})
})

// DELETE A WORKOUT
router.delete('/:id', (req, res)=>{
    res.json({msg:"delete a  workout"})
})

// UPDATE A WORKOUT
router.patch('/:id', (req, res)=>{
    res.json({msg:"Update a workout"})
})
module.exports = router
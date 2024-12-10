const express = require('express')

const router = express.Router()
const workout  = require('../model/workout')
const { createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout

 } = require('../controllers/workoutController')


// Get all workout
router.get('/', getWorkouts)


// Get s single workout 
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router
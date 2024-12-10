const WorkOut = require('../model/workout')
const mongoose = require('mongoose')

// get all workouts 
const getWorkouts = async (req, res, next) =>{
    const workouts = await WorkOut.find({}).sort({createAt: -1})
    res.status(200).json(workouts)

}


// get a single workout
const getWorkout = async (req, res) =>{
    const {
        id
    } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'})
    }

    const workout = await WorkOut.findById(id)
    if(!workout){
        return res.status(404).json({message: 'Workout not found'})
    }
    res.status(200).json(workout)
    
}

// create new workout
const createWorkout = async (req, res) => {

    const {
        title, load, reps
    } = req.body

    let emptyField = []

    if(!title){
        emptyField.push('title')
    }
    if(!load){
        emptyField.push('load')
    }
    if(!reps){
        emptyField.push('reps')
    }

    if(emptyField.length >0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyField})
    }

    try {
        const newWorkout = await WorkOut.create({
            title, load, reps
        })
        res.status(200).json(newWorkout)

    } catch (err){
        res.status(400).json({error: err.message})

    }

}


// delete a workout

const deleteWorkout = async (req, res) => {
    const {
        id
    } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'})
    }
    const workout = await  WorkOut.findOneAndDelete({_id: id})
    if(!workout){
        return res.status(404).json({message: 'No such workout'})
    }

    res.status(200).json(workout)
}


// update a workout
const updateWorkout = async (req, res) => {
    const {
        id
    } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such workout'})

    }
    
    const workout = await WorkOut.findOneAndUpdate({_id: id},{...req.body})
    if(!workout){
        return res.status(404).json({message: 'No such workout'})
    }
    res.status(200).json(workout)

}




module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
    
}
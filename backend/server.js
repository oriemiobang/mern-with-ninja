
require('dotenv').config()
const express = require('express')
const WorkoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
// express app 
const app = express()

// middleware 
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes 
app.use('/api/workouts',WorkoutRoutes)
app.use('/api/user',userRoute)
// connect to db
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT, ()=> {
        console.log(`Server running on port ${process.env.PORT} and connected to db `)
    })

}).catch((error)=>{
    console.log(error)
})


import {useEffect} from 'react'

import WorkOutDetail from '../components/WorkOutDetail'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/userWorkoutsContext'
const Home = ()=>{
   const {workouts, dispatch} = useWorkoutContext()

    useEffect(()=>{
        const fectchWorkouts = async ()=>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }

        }
        fectchWorkouts()
    },[dispatch])

    return ( <>
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((workout)=>(
                <WorkOutDetail key={workout._id} workout={workout}/>
            ))}
        </div>

        <WorkoutForm/>

    </div>

    </>);
}

export default Home;
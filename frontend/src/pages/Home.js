import {useEffect} from 'react'

import WorkOutDetail from '../components/WorkOutDetail'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/userWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'
const Home = ()=>{
   const {workouts, dispatch} = useWorkoutContext()
   const {user } = useAuthContext()

    useEffect(()=>{
        const fectchWorkouts = async ()=>{
            const response = await fetch('/api/workouts',{ headers: {
                'Authorization': `Bearer ${user.token}`}
            })
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }

        }
        if(user){
            fectchWorkouts()

        }
       
    },[dispatch, user])

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
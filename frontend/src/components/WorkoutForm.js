import {useState} from 'react'
import { useWorkoutContext } from '../hooks/userWorkoutsContext'

const WorkoutForm = ()=>{
    const {dispatch} = useWorkoutContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyField, setEmptyField] = useState([])

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {method: 'POST', body: JSON.stringify(workout), 
            headers: {'Content-Type': 'application/json'}
        })
const json = await response.json(workout)

        if(!response.ok){
            setError(json.error)
            setEmptyField(json.emptyField)
        }
        if(response.ok){
            dispatch({type: 'CREATE_WORKOUTS', payload: json})
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            emptyField([])
            console.log('new workout added', json)
           
        }
    }
    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title</label>
            <input
             type='text'
             onChange={(e) => setTitle(e.target.value)}
             value={title}
             className={emptyField.includes('title') ? 'error': ''}
             />

<label>Load (in kg)</label>
            <input
             type='number'
             onChange={(e) => setLoad(e.target.value)}
             value={load}
             className={emptyField.includes('load') ? 'error': ''}
             />
          

          <label>Reps:</label>
            <input
             type='number'
             onChange={(e) => setReps(e.target.value)}
             value={reps}
             className={emptyField.includes('reps') ? 'error': ''}
             />

             <button>Add Workout</button>
             {error && <div className='error'>{error}</div>}
          
          
        </form>
    )
}

export default WorkoutForm
import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./userWorkoutsContext";

export const useLogout = ()=> {
    const {dispatch}  = useAuthContext();
    const {dispatch: workoutsDispatch} = useWorkoutContext();

    const logout = ()=> {
        // remove user from the local storage
        localStorage.removeItem('user');
        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return {logout}

}
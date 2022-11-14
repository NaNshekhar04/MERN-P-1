import React, { useEffect } from 'react'
import { useWorkOutContext } from "../hooks/useWorkOutContext";

//components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutsForm from '../components/WorkoutsForm';

export const Home = () => {
    const { workouts, dispatch } = useWorkOutContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        } 
        fetchWorkouts();
    }, [])


    return (
        <div className="home">
            <div className="workout">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutsForm />
        </div>
    )
}

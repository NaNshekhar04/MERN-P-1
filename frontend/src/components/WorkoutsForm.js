import React, { useState } from 'react'

const WorkoutsForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null);


    //handleSubmit Function on the Form submit !
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, load, reps }
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null);
            console.log('new Workout Added')
            window.location.reload();
        }
    }

    return (
        <form action="" onSubmit={handleSubmit} className="create">
            <h3>Add a New WorkOut</h3>

            {/* Form for Adding New Exercises ! */}

            <label>Exercise Title: </label>
            <input
                type="text"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <label>Load (in Kg): </label>
            <input
                type="number"
                onChange={(e) => {
                    setLoad(e.target.value);
                }}
            />
            <label>Reps: </label>
            <input
                type="number"
                onChange={(e) => {
                    setReps(e.target.value);
                }}
            />

            <button>Add WorkOut</button>
            {error && <div className='error'> {error}</div>}
        </form>
    )
}

export default WorkoutsForm
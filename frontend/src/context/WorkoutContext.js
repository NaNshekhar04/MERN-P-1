import { createContext, useReducer } from "react";


export const WorkOutContext = createContext();

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
            return state

    }
}


export const WorkOutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })


    return (
        <WorkOutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkOutContext.Provider>
    )
}

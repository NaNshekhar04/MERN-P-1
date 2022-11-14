import { WorkOutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkOutContext = () => {
    const context = useContext(WorkOutContext);

    if (!context) {
        throw Error('useWorkOutContext must be used in a WorkOutContextProvider');
    }

    return context
}
import React, { useReducer } from "react";
import { reducer, initialstate } from "./Reducer";
import { handleIncrementCount, handleDecrementCount, handleValueChange } from "./action";




export const FormObject = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <div>
            <button onClick={() => dispatch(handleIncrementCount())}>Age Incrementer</button>
            <button onClick={() => dispatch(handleDecrementCount())}>Age Decrementer</button>
            <input type="text" onChange={(e) => dispatch(handleValueChange(e))} />
            <h1>The age is {state.age}</h1>
            <h2>hello {state.name}</h2>
        </div>
    )
}
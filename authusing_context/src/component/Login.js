import React, { useContext } from "react";
import { AuthContext } from "../context/ThemeContext";

export const Login = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    console.log(currentUser, 'currentUser');

    if (currentUser !== null) {
        return (
            <>
                <h2>{`user logged in as ${currentUser.name}`}</h2>
                <button onClick={() => {setCurrentUser(null)}}>logout</button>
            </>

        )
    }

    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={() => { setCurrentUser({ name: 'Bhavesh' }) }}>{`login as Bhavesh`}</button>
        </div>
    )
}
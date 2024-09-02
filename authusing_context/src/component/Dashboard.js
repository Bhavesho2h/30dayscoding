import React, { useContext } from "react";
import { AuthContext } from "../context/ThemeContext";
import { Login } from "./Login";

export const Dashboard = () => {
    return(
        <div>
            <Login/>
        </div>
    )
}
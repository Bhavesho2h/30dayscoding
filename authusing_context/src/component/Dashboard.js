import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Login } from "./Login";
import "./Form.css"

export const Dashboard = () => {
    const theme = useContext(ThemeContext);
    const className = 'panel' + theme;
    console.log(className,'className')
    return(
        <div className={className}>
            <Login/>
        </div>
    )
}
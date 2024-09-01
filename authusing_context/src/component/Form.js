import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import './Form.css'; // Ensure this imports the CSS file


export const Form = ({ title, children }) => {
    const theme = useContext(ThemeContext);
    const className = 'panel' + theme;
    console.log(className,'className')


    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}
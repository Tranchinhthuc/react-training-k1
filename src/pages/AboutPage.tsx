import React from "react";
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>React Todo App</h1>
            <p>Welcome!</p>
            <button className="btn" onClick={() => history.push('/')}>Add new</button>
        </>
    )
}

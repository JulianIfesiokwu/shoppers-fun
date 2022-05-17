import React from "react";
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
            <h1>I am sorry the page you requested does not exist</h1>
            <Link to='/'>Back Home</Link>
        </>
    )
}

export default ErrorPage
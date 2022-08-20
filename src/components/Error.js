import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>404 Page Not Found</h1>
        <Link to="/">Go back to dashboard</Link>
    </div>
  )
}

export default Error
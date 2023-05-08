import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  
  return (
    <main>
        <h1>Missing</h1>
        <h2>Post not Found</h2>
              <p>Well ,that's dissapointing.</p>
              <p>
                <Link to='/'>Visit our Homepage</Link>
              </p>
    </main>
  )
}

export default Missing
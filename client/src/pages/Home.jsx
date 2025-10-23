import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to='/about'>Go to About</Link>
        <h1>Home Page</h1>
        <p>This is the home page of the application.</p>
    </div>
  )
}

export default Home
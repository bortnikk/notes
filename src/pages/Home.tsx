import React from 'react'
import { NavLink } from 'react-router-dom'


function Home() {
  return (
     <section className='Home'>
        <h1>
           Welcome To ReactTS Notes App
        </h1>
        <h2>
           Jump To Notes Page To Continue
        </h2>
        <NavLink to='/notes' className='home__btn'>Go To Notes</NavLink>
    </section>
  )
}

export default Home
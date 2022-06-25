import React from 'react'
import {NavLink} from 'react-router-dom'

function About() {
  return (
     <section className="About">
        <h1>Credits</h1>
        <div className="about__container">
           <p>This App Was Created By Using React, TypeScript and Sass Preprocessor</p>
           <p>@Developed By Bortnik , 2022</p>
        </div>
        <NavLink to='/notes' className='about__btn'>Go To Notes</NavLink>
    </section>
  )
}

export default About
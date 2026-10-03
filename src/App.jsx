import React, { useState, useEffect } from 'react'
import './index.css'

//import { socials } from './data/socials'
import { projects } from './data/projects'

import Header from './components/Header'
import Project from './components/Project'

function App() {
  return (
    <>
      <Header></Header>
      <div className='flex-1 w-full max-w-4xl mx-auto p-6 md:p-12 pt-20'>
        <Project
          title={projects[0].title}
          tech={projects[0].tech}
          description={projects[0].description}
          img={projects[0].img}
        />

        <Project
          title={projects[1].title}
          tech={projects[1].tech}
          description={projects[1].description}
          url={projects[1].url}
          img={projects[1].img}
        />
        
      </div>
    </>
  )
}

export default App
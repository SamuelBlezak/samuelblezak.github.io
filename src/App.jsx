import React, { useState, useEffect } from 'react'
import './index.css'

//import { socials } from './data/socials'
import { projects } from './data/projects'

import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <div className='bg-gray-50 flex-1'>

        <div className='w-full max-w-4xl mx-auto p-6 md:p-12 pt-20'>

          <h3 className='text-3xl font-bold mb-4'>Projekty</h3>

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

          <Project
            title={projects[2].title}
            tech={projects[2].tech}
            description={projects[2].description}
            url={projects[2].url}
            img={projects[2].img}
          />
        
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
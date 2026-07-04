import React, { useState, useEffect } from 'react'
import './index.css'

import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { myProjects } from './data/projects';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const mySkills = ["Java", "Python", "C#"]

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">

      {/* TOP BAR */}
      <header className="fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
        {/* Meno + odkazy v ľavom hornom rohu */}
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold text-gray-900 dark:text-white">Samuel Bležák</span>

          <div className="flex items-center gap-3 text-xl text-gray-600 dark:text-gray-300">
            <a
              href="https://github.com/SamuelBlezak"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samuelblezak"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:samkoblezi@gmail.com"
              title="Email"
              className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* TLAČIDLO NA PREPÍNANIE */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-xl bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          title="Prepnúť tmavý režim"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </header>

      {/* pt-14 aby obsah nebol schovaný pod fixným top barom */}
      <div className="flex-1 w-full max-w-4xl mx-auto p-6 md:p-12 pt-20">

        {/* Úprava nadpisov, aby v tme vyzerali dobre */}
        <h1 className="pt-8 text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Samuel Bležák</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">Študent aplikovanej informatiky</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white mb-2">Projekty</h2>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white mb-2">Na čom momentálne pracujem</h2>
      {myProjects
        .filter(project => project.inProgress === true) // filter ci sa momentalne na projekte pracuje
        .map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            tech={project.tech}
            description={project.description}
            link={project.link}
            imageUrl={project.imageUrl}
          />
        ))}

      <h2 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white mb-2">Už dokončené projekty</h2>
      {myProjects
        .filter(project => project.inProgress === false) // filter ci sa momentalne na projekte nepracuje (ci je dokoncenynpm install -D @tailwindcss/postcss)
        .map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            tech={project.tech}
            description={project.description}
            link={project.link}
            imageUrl={project.imageUrl}
          />
        ))}

      <h2 className="text-2xl font-bold text-gray-900 mb-4">Moje Zručnosti</h2>
        <div className="flex flex-wrap gap-2 mb-12">
          {mySkills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>

      
      </div>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'

function ProjectCard(props) {
  return (
    // Kartička bude v tme tmavosivá (dark:bg-gray-800) s tmavším okrajom
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 overflow-hidden">
      
      {props.imageUrl && (
        <img 
          src={props.imageUrl} 
          alt={`Náhľad projektu ${props.title}`} 
          className="w-full h-48 object-cover border-b border-gray-100 dark:border-gray-700" 
        />
      )}

      <div className="p-6">
        {/* Nadpis bude v tme biely */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{props.title}</h3>
        
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">{props.tech}</p>
        
        {/* Bežný text bude svetlosivý */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">{props.description}</p>
        
        {props.link && (
          <a 
            href={props.link} 
            target="_blank" 
            rel="noreferrer" 
            // Tlačidlo upravíme tak, aby v tme nevyzeralo úplne čierne
            className="inline-block bg-gray-900 dark:bg-gray-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            Pozrieť kód na GitHube
          </a>
        )}
      </div>

    </div>
  )
}

export default ProjectCard
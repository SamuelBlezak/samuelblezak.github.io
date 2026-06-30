import React from 'react'

function Footer() {
  return (
    // Samotný footer zaberá 100% šírky (w-full) a má hornú čiaru (border-t)
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-8 mt-10">
      
      {/* Vnútorný div zarovná text presne s tvojimi projektmi (max-w-4xl mx-auto) */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Kontaktujte ma</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Máte záujem o spoluprácu alebo stáž? Ozvite sa mi:</p>
        
        <ul className="space-y-2 text-gray-800 dark:text-gray-200">
          <li>
            <strong>Email:</strong> <a href="mailto:samuelblezak@gmail.com" className="hover:text-blue-500 transition-colors">samuelblezak@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/samuelblezak" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">linkedin.com/in/samuelblezak</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/samuelblezak" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">github.com/samuelblezak</a>
          </li>
        </ul>
        
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
          © {new Date().getFullYear()} Samuel Blezák. Vytvorené v Reacte.
        </p>
      </div>
      
    </footer>
  )
}

export default Footer
import React from 'react'
import { FaReact, FaJs } from 'react-icons/fa'

const ProgrammingLanguageIcon = ({ language }) => {
  switch (language) {
    case 'javascript':
      return <FaJs />
    case 'react':
      return <FaReact />
    case 'csharp':
      return <span>C#</span>
    case 'typescript':
      return <span>TypeScript</span>
    default:
      return null
  }
}

export { ProgrammingLanguageIcon }

import React from 'react'
import "./rules.css"
import closeIcon from '../assets/close-icon.png'
import { useState} from 'react'

export default function Rules() {
  
  const [closeRules, setCloseRules] = useState(true)

  const showAndHide = () => {
    setCloseRules(false)
  }

  if (!closeRules) {
    return null; 
  }

  return (
    <div className={`Rules ${closeRules ? '' : 'hidden'}`}>
      <button onClick={showAndHide} className="close">
        <img src={closeIcon} alt="close-icon" className='close-icon' />
      </button>
      <div>
        <p>ასოების გამოყენებით უნდა გამოიცანი სიტყვა</p>
        <p>ასოს შეშლისას, წაგებას ერთი ნაბიჯით უახლოვდები</p>
        <p>არ დანებდე და აუცილებლად გაიმარჯვებ :)</p>
      </div>
  
    </div>
  )
}

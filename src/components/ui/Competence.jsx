
import React, { useEffect, useState } from 'react'

const url = "https://api-render-2.onrender.com"
export default function Competence() {
    const [competences,setCompetences] = useState([])
    async function fetchCompetence(){
        // const response = await fetch('http://localhost:3333/competence')
        const response = await fetch(`${url}/competence`)
        const data = await response.json()
        setCompetences(data)
    }

    useEffect(()=>{
        fetchCompetence()
    },[])
    
  return (
    <div>
        <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl">COMPETENCES</h2>
        <ul>
            {competences.map(item => <li key={item._id}>{item.skill}</li>)}

        </ul>
    </div>
  )
}

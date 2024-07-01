import React, { useEffect, useState } from 'react'
const url = "http://localhost:3333"

export default function Langue() {
    const [langues,setLangues] = useState([])
    async function fetchLangue(){
        const response = await fetch(`${url}/langue`)
        const data = await response.json()
        setLangues(data)
    }
    useEffect(()=>{
        fetchLangue()
    },[])
  return (
    <div>
        <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl">LANGUE</h2>
        <table>
            {langues.map(langue => 
                <tr>
                    <td>{langue.name}</td>
                    <td>{langue.level}</td>
                     
                </tr>
            )}
        </table>
    </div>
  )
}

import { useEffect, useState } from "react";

const url = 'http://localhost:3333'
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
        <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl mb-2">LANGUE</h2>
        <table className="w-full">
            <tbody>

                {langues.map(item => 
                    <tr key={item._id}>
                        <th className="p-1 border border-black">{item.name}</th>
                        <td className="p-1 border border-black">{item.level}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5555"
export default function Loisir() {
    // const [loisir, setLoisir] = useState([])
    // const fetchLoisir = async () => {
    //     const response = await fetch(`${BASE_URL}/loisir`)
    //     const data = await response.json()
    //     setLoisir(data)
    // }


    // useEffect(() => {
    //     fetchLoisir()
    // }, [])
    const loisir = ['foot','handball', 'swimming', 'equitation']
    return (
        <div>
            <h2 className='text-2xl text-center font-bold bg-[#313B6D] rounded-lg p-1 text-white mb-5'>Centre d'intérêts</h2>
            <ul>
                {loisir && loisir.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

// osmjom@gmail.com
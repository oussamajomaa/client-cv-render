import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:5555"

export default function Langue() {
    const [langue, setLangue] = useState([])
    const fetchLangue = async () => {
        const response = await fetch(`${BASE_URL}/langue`)
        const data = await response.json()
        setLangue(data)
    }

    useEffect(() => {
        fetchLangue()
    }, [])
    return (
        <div>
            <h2 className='text-2xl text-center font-bold bg-[#313B6D] rounded-lg p-1 text-white mb-5'>Langues</h2>
            <table>
                <tbody>
                    {langue && langue.map(item =>
                        <tr key={item._id}>
                            <th>{item.name}</th>
                            <td>{item.level}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

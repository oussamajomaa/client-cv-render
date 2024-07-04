import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";

const url = 'http://localhost:3333'
export default function AdminLangue() {
    const [langues, setLangues] = useState([])
    const [name,setName]= useState('')
    const [level,setLevel]=useState('')
    const [isAdd,setIsAdd]=useState(false)

    async function fetchLangue() {
        const response = await fetch(`${url}/langue`)
        const data = await response.json()
        setLangues(data)
    }

    useEffect(() => {
        fetchLangue()
    }, [])

    async function handleDelete(id) {
        const response = await fetch(`${url}/langue/${id}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            const data = await response.json()
            fetchLangue()
        }
    }

    const addLangue = () => {
        setIsAdd(true)
    }

    async function handleSave(){
        if (name !== "" && level !== ""){
            const response = await fetch(`${url}/langue`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({name,level})
            })
            if (response.ok){
                const data = await response.json()
                fetchLangue()
                setName("")
                setLevel("")
            }
        }

    }

    function handleCancel(){
        setIsAdd(false)
    }

    return (
        <div>
            <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl mb-2">LANGUE</h2>

            {!isAdd && <button onClick={addLangue} className='btn'>
                <IoMdAddCircle size={24} color='blue' title='Ajouter' />
            </button>}

            {isAdd && <div className='flex gap-2'>

                <input
                    placeholder='Ajouter une nouvelle compétence'
                    className="input input-bordered input-primary w-full"
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>

                <select 
                    className="select select-secondary w-full max-w-xs" 
                    onChange={(e)=>setLevel(e.target.value)} defaultValue={level}>
                    <option selected hidden defaultValue="">Choisir le niveau</option>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Avancé">Avancé</option>
                    <option value="Maternel">Maternel</option>
                </select>

                <button onClick={handleSave}>
                    <TfiSave color='green' size={24} title='Sauvegarder' />
                </button>
                <button onClick={handleCancel}>
                    <MdCancel color='gray' title='Annuler' size={24} />
                </button>
            </div>}
            <table className="w-full">
                <tbody>
                    {langues.map(item =>
                        <tr key={item._id}>
                            <th className="p-2">{item.name}</th>
                            <td className="p-2">{item.level}</td>
                            <td>
                                <button onClick={() => handleDelete(item._id)} className="btn"><MdDelete size={24} color="red" /></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

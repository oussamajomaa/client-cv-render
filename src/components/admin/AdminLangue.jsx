import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { MdDelete } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { MdAddBox } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

const BASE_URL = "http://localhost:5555"

export default function AdminLangue() {
    const [langue, setLangue] = useState([])
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [add, setAdd] = useState(false)

    const fetchLangue = async () => {
        const response = await fetch(`${BASE_URL}/langue`)
        const data = await response.json()
        setLangue(data)
    }

    useEffect(() => {
        fetchLangue()
    }, [])

    const handleDelete = async (id) => {
        const response = await fetch(`${BASE_URL}/langue/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'warning', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
            fetchLangue()
        }

    }

    const handleAdd = async () => {
        setAdd(true)

    }

    function handleClose() {
        setAdd(false)
        setName('')
        setLevel('')
    }

    const handleSave = async () => {
        const response = await fetch(`${BASE_URL}/langue`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, level })
        })

        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'success', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
            fetchLangue()
            setAdd(false)
            setName('')
            setLevel('')
        }
    }
    return (
        <div className='shadow-xl p-5 rounded-xl'>
            <div className='flex justify-center gap-3 items-center mb-3'>
                <h2 className='text-2xl text-center font-bold '>Langues</h2>
                {!add &&
                    <button onClick={handleAdd}>
                        <MdAddBox color='blue' size={20} />
                    </button>
                }
            </div>
            {add &&
                <div className='flex gap-3 mt-3'>
                    <input
                        className="mb-2 input input-bordered input-success w-full "
                        placeholder='Ajouter une langue'
                        type='text'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                    
                    <select
                        className="mb-2 input input-bordered input-success w-full "
                        value={level}
                        onChange={(e) => { setLevel(e.target.value) }}>
                        <option disabled value="" >Sélectionner le niveau</option>
                        <option value="Langue maternelle">Langue maternelle</option>
                        <option value="Courant">Courant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Débutant">Débutant</option>
                    </select>
                    <div className='btn-save-close'>
                        <button onClick={handleClose}><IoCloseCircle color='#E91E63' size={20} /></button>
                        <button onClick={handleSave}><LiaSaveSolid color='green' size={20} /></button>
                    </div>
                </div>
            }

            {langue && langue.map(item =>
                <div className='flex justify-between mb-3 shadow' key={item._id}>
                    <div className='flex w-4/5'>
                        <p className='w-1/2'>{item.name}</p>
                        <p className='w-1/2'>{item.level}</p>
                    </div>
                    <button><MdDelete color='#E91E63' size={20} onClick={() => handleDelete(item._id)} /></button>
                </div>)
            }

        </div>
    )
}

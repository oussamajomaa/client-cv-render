import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { MdDelete } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { MdAddBox } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

const BASE_URL = "http://localhost:5555"

export default function AdminLoisir() {
    const [description, setDescription] = useState("")
    const [add, setAdd] = useState(false)
    const [loisir, setLoisir] = useState([])

    const fetchLoisir = async () => {
        const response = await fetch(`${BASE_URL}/loisir`)
        const data = await response.json()
        setLoisir(data)
    }

    useEffect(() => {
        fetchLoisir()
    }, [])

    const handleDelete = async (id) => {
        const response = await fetch(`${BASE_URL}/loisir/${id}`, {
            method: 'DELETE',
            credentials:'include'
        })
        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'warning', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
            fetchLoisir()
        }
    }

    const handleAdd = async () => {
        setAdd(true)
    }

    async function handleSave() {
        try {
            const response = await fetch(`${BASE_URL}/loisir/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description }),
                credentials:"include"
            })
            if (response.ok) {
                const data = await response.json()
                enqueueSnackbar(data.message, {
                    variant: 'success', autoHideDuration: 2000, anchorOrigin: {
                        horizontal: 'center',
                        vertical: 'top',
                    }
                })
                fetchLoisir()
                setAdd(false)
                setDescription('')
            }
        } catch (e) {
            console.log(e)
        }
    }

    function handleClose() {
        setAdd(false)
        setDescription('')
    }

    return (
        <div className='shadow-xl p-5 rounded-xl'>
            <div className='flex justify-center gap-3 items-center'>
                <h2 className='text-2xl text-center font-bold'>Centre d'intérêts</h2>
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
                        placeholder='Ajouter un loisir'
                        type='text'
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                    <button onClick={handleClose}><IoCloseCircle color='#E91E63' size={20} /></button>
                    <button onClick={handleSave}><LiaSaveSolid color='green' size={20} /></button>
                </div>
            }


            {loisir && loisir.map(item =>
                <div className='flex justify-between mb-3 shadow' key={item._id}>
                    <p>{item.description}</p>
                    <button><MdDelete color='#E91E63' size={20} onClick={() => handleDelete(item._id)} /></button>
                </div>)
            }
        </div>
    )
}
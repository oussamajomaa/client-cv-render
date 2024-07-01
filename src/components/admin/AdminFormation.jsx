import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';
import { MdDelete } from "react-icons/md";
import { LiaSaveSolid } from "react-icons/lia";
import { MdAddBox } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
const BASE_URL = "http://localhost:5555"

export default function AdminFormation() {
    const [formation, setFormation] = useState([])
    const [year, setYear] = useState('')
    const [establishment, setEstablishment] = useState('')
    const [description, setDescription] = useState('')
    const [add, setAdd] = useState(false)



    const fetchFormation = async () => {
        const response = await fetch(`${BASE_URL}/formation`)
        const data = await response.json()
        setFormation(data)
    }

    useEffect(() => {
        fetchFormation()
    }, [])

    const handleDelete = async (id) => {
        const response = await fetch(`${BASE_URL}/formation/${id}`, {
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
            fetchFormation()
        }

    }

    const handleAdd = async () => {
        setAdd(true)

    }

    function handleClose() {
        setAdd(false)
        setYear('')
        setEstablishment('')
        setAdd('')
    }

    const handleSave = async () => {
        const response = await fetch(`${BASE_URL}/formation`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ year, establishment, description })
        })

        if (response.ok) {
            const data = await response.json()
            enqueueSnackbar(data.message, {
                variant: 'success', autoHideDuration: 2000, anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top',
                }
            })
            fetchFormation()
            setAdd(false)
            setYear('')
            setEstablishment('')
            setAdd('')
        }
    }
    return (
        <div className='shadow-xl p-5 rounded-xl'>
            <div className='flex justify-center gap-3 items-center'>
                <h2 className='text-2xl text-center font-bold'>Formations</h2>
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
                        placeholder='Année'
                        type='text'
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }} />
                    <input
                        className="mb-2 input input-bordered input-success w-full "
                        placeholder='Etablissement'
                        type='text'
                        value={establishment}
                        onChange={(e) => { setEstablishment(e.target.value) }} />
                    <input
                        className="mb-2 input input-bordered input-success w-full "
                        placeholder='Diplôme'
                        type='text'
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />


                    <div className='btn-save-close'>
                        <button onClick={handleClose}><IoCloseCircle color='#E91E63' size={20} /></button>
                        <button onClick={handleSave}><LiaSaveSolid color='green' size={20} /></button>
                    </div>
                </div>
            }

            {formation && formation.map(item =>
                <div className='flex mb-3 p-2 shadow' key={item._id}>
                    <div className='w-11/12'>
                        <div className='flex '>
                            <h4 className='w-1/5'>Année</h4>
                            <p>{item.year}</p>
                        </div>
                        <div className='flex '>
                            <h4 className='w-1/5'>Etablissement</h4>
                            <p>{item.establishment}</p>
                        </div>
                        <div className='flex '>
                            <h4 className='w-1/5'>Diplôme</h4>
                            <p>{item.description}</p>
                        </div>

                    </div>
                        <button><MdDelete color='#E91E63' size={20} onClick={() => handleDelete(item._id)} /></button>
                </div>)
            }

        </div>
    )
}

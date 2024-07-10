import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
import { enqueueSnackbar } from 'notistack';
import { BASE_URL } from "../Url";

// const url = "http://localhost:3333"

export default function AdminCompetence() {
  const [competences, setCompetences] = useState([])
  const [skill, setSkill] = useState('')
  const [isAdd, setIsAdd] = useState(false)
  async function fetchCompetence() {
    const response = await fetch(`${BASE_URL}/competence`)
    const data = await response.json()
    setCompetences(data)
  }

  useEffect(() => {
    fetchCompetence()
  }, [])

  async function handleDelete(id) {
    const response = await fetch(`${BASE_URL}/competence/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      const data = await response.json()
      enqueueSnackbar(data.message, {
        variant:'error',
        autoHideDuration:2000,
        anchorOrigin:{
          horizontal:"center",
          vertical:"top"
        }
      })
      fetchCompetence()
    }
  }

  async function handleSave() {
    if (skill !== "") {
      const response = await fetch(`${BASE_URL}/competence`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skill })
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data.message)
        enqueueSnackbar(data.message, {
          variant:"success",
          autoHideDuration:2000,
          anchorOrigin:{
            horizontal:"center",
            vertical:"top"
          }
        })
        fetchCompetence()
        setSkill('')
      }
    }
  }

  function handleCancel() {
    setIsAdd(false)
    setSkill('')
  }

  function addSkill() {
    setIsAdd(true)
  }
  return (
    <div className=''>
      <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl mb-3">COMPETENCES</h2>


      {isAdd===false && <button onClick={addSkill} className='btn'>
        <IoMdAddCircle size={24} color='blue' title='Ajouter' />
      </button>}


      {isAdd===true &&
        <div className='flex gap-2'>
          <input
            placeholder='Ajouter une nouvelle compétence'
            className="input input-bordered input-primary w-full"
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)} />
          <button onClick={handleSave}>
            <TfiSave color='green' size={24} title='Sauvegarder' />
          </button>
          <button onClick={handleCancel}>
            <MdCancel color='gray' title='Annuler' size={24} />
          </button>
        </div>
      }
      {competences.map(item =>
        <div className='flex justify-between items-center' key={item._id}>
          <p>{item.skill}</p>
          <button
            onClick={() => { handleDelete(item._id) }}
            className='btn mb-1'>
            <MdDelete size={24} color='red' />
          </button>
        </div>)}
    </div>
  )
}

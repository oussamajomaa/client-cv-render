import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";

const url = "http://localhost:3333"

export default function AdminCompetence() {
  const [competences, setCompetences] = useState([])
  const [skill, setSkill] = useState('')
  const [isAdd, setIsAdd] = useState(false)
  async function fetchCompetence() {
    const response = await fetch(`${url}/competence`)
    const data = await response.json()
    console.log(data);
    setCompetences(data)
  }

  useEffect(() => {
    fetchCompetence()
  }, [])

  async function handleDelete(id) {
    console.log(id)
    const response = await fetch(`${url}/competence/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      fetchCompetence()
    }
  }

  async function handleSave() {
    if (skill !== "") {
      const response = await fetch(`${url}/competence`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ skill })
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data)
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
    <div className='flex flex-col gap-2'>
      <button onClick={addSkill} className='btn btn-primary btn-sm w-16'>
        <IoMdAddCircle size={24} title='Ajouter' />
      </button>
      {isAdd && <div className='flex gap-2'>
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
      </div>}
      {competences.map(item =>
        <div className='flex justify-between items-center'>
          <p>{item.skill}</p>
          <p>{item._id}</p>
          <button
            onClick={() => { handleDelete(item._id) }}
            className='btn my-1'>
            <MdDelete size={24} color='red' />
          </button>
        </div>)}
    </div>
  )
}

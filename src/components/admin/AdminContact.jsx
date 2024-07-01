import React, { useEffect, useState } from 'react'
import { LiaSaveSolid } from 'react-icons/lia'

const url = "https://api-render-2.onrender.com"

export default function AdminContact() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')

    async function fetchContact() {
        // const response = await fetch('http://localhost:3333/contact')
        const response = await fetch(`${url}/contact`)
        const data = await response.json()
        setNom(data[0].nom)
        setPrenom(data[0].prenom)
        setTel(data[0].tel)
        setEmail(data[0].email)
        setAdresse(data[0].adresse)
    }

    useEffect(() => {
        fetchContact()
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        console.log(tel, email, adresse)
        fetch(`${url}/contact`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nom, prenom, tel, email, adresse })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className=''>
                <label>Tel</label>
                <input
                    className="input input-bordered input-primary w-full"
                    type="text"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)} />
            </div>
            <div className=''>
                <label>Email</label>
                <input
                    className="input input-bordered input-primary w-full"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className=''>
                <label>Adresse</label>
                <input
                    className="input input-bordered input-primary w-full"
                    type="text"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)} />
            </div>
            <button className='btn btn-sm my-2 btn-outline-success'>
                <LiaSaveSolid color='green' size={24} />
            </button>
        </form>
    )
}

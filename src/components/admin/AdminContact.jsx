import React, { useEffect, useState } from 'react'
import { TfiSave } from "react-icons/tfi";
import { BASE_URL } from "../Url";

// const url = "https://api-render-2.onrender.com"
// const BASE_URL = "http://localhost:3333"
export default function AdminContact() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [adresse, setAdresse] = useState('')

    async function fetchContact() {
        const response = await fetch(`${BASE_URL}/contact`)
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
        fetch(`${BASE_URL}/contact`, {
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
        <div>
            <h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl mb-3">CONTACT</h2>
            <form onSubmit={handleSubmit}>
                <div className='my-3'>
                    <label>Tel</label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)} />
                </div>
                <div className='my-3'>
                    <label>Email</label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='my-3'>
                    <label>Adresse</label>
                    <input
                        className="input input-bordered input-primary w-full"
                        type="text"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)} />
                </div>
                <button className='btn btn-sm my-2 btn-outline-success'>
                    <TfiSave color='green' size={24} />
                </button>
            </form>
        </div>
    )
}

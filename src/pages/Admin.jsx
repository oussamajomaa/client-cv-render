
import AdminContact from '../components/admin/AdminContact';
import AdminSkill from '../components/admin/AdminSkill';
import AdminLangue from '../components/admin/AdminLangue';
import AdminLoisir from '../components/admin/AdminLoisir';
import AdminFormation from '../components/admin/AdminFormation';
import AdminExperience from '../components/admin/AdminExperience';
import { Navigate, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundForward } from "react-icons/io";
import Login from './Login';
import { useState } from 'react';
import AdminCompetence from '../components/admin/AdminCompetence';



export default function Admin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        if (username === "osm" && password === "osm") {
            setIsLogged(true)
        } else {
            alert('les identifiants sont incorrects')
        }
    }

    if (!isLogged) {
        return (
            <Login
                
                setUsername={(e) => setUsername(e.target.value)}
                setPassword={(e) => setPassword(e.target.value)}
                handleSubmit={handleSubmit}
            />
        )
    }

    return (
        <div className="flex gap-5 p-5 max-md:flex-col">

            <div className='flex flex-col gap-5 w-1/3 max-md:w-full'>

                <AdminContact />
                <AdminCompetence />
                <AdminLangue />
                {/* <AdminSkill />
                <AdminLangue />
                <AdminLoisir /> */}
            </div>
            <div className='flex flex-col gap-5 w-2/3 max-md:w-full'>
                {/* <AdminExperience />
                <AdminFormation /> */}
                <div className='flex justify-end '>
                    {/* <button className=" btn" onClick={logout}>page d'accueil <IoMdArrowRoundForward /></button> */}
                </div>
            </div>
        </div>
    )
}

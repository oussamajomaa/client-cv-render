
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

const url = "https://api-render-2.onrender.com"

export default function Admin() {
    const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [logged, setLogged] = useState(false)
    const navigate = useNavigate();
    const logout = async () => {
        console.log('logout')
        const response = await fetch(`${url}/logout`, {
            method: 'POST',
            credentials: 'include'
        })
        if (response.ok) {
            localStorage.removeItem('token')
            navigate("/")
        }
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        if (username === "osm" && password === "osm") {
            setLogged(true)
        }
    }

    // if (!logged) {
    //     return (
    //         <Login 
    //             username={username} 
    //             password={password} 
    //             setUsername={(e)=>setUsername(e.target.value)} 
    //             setPassword={(e)=>setPassword(e.target.value)} 
    //             handleSubmit={handleSubmit} />
    //     )
    // }
    return (
        <div className="flex gap-5 p-5 max-md:flex-col">

            <div className='flex flex-col gap-5 w-1/3 max-md:w-full'>
            
                <AdminContact />
                {/* <AdminSkill />
                <AdminLangue />
                <AdminLoisir /> */}
            </div>
            <div className='flex flex-col gap-5 w-2/3 max-md:w-full'>
                {/* <AdminExperience />
                <AdminFormation /> */}
                <div className='flex justify-end '>
                <button className=" btn" onClick={logout}>page d'accueil <IoMdArrowRoundForward /></button>
                </div>
            </div>
        </div>
    )
}

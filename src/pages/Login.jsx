import { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';


export default function Login({username,password,setUsername,setPassword,handleSubmit}) {
	// const [username, setUsername] = useState('')
	// const [password, setPassword] = useState('')
	// const [logged, setLogged] = useState(false)
	const [message, setMessage] = useState('')

	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	try {
	// 		const response = await fetch('http://localhost:5555/login', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify({ username, password }),
	// 			credentials:'include'

	// 		})

	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			localStorage.setItem('token', data.token)

    //             console.log(data);
    //             <Navigate to={'/admin'} />
	// 			setLogged(true)
	// 		} else {
	// 			const data = await response.json()
	// 			setMessage(data.message)
	// 		}
	// 	} catch (error) {
	// 		console.error('Network error:', error);
	// 	}
		
	// }



	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='flex flex-col gap-5 justify-center items-center p-5 h-3/6 lg:w-1/3 md:w-1/2 shadow-2xl rounded'>
				<h2 className='text-2xl font-bold'>LOGIN</h2>
				<form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[400px] px-3">
					<input
						className='input input-bordered input-primary w-full'
						type="text"
						required
						value={username}
						onChange={setUsername}
						placeholder="Nom d'utilisateur" />
					<input
						className='input input-bordered input-primary w-full'
						type="password"
						required
						value={password}
						onChange={setPassword}
						placeholder="Mot de passe" />
					<button className='btn btn-primary'>Login</button>
					<NavLink to={'/forgot-password'}>Mot de passe oublié</NavLink>
				</form>
				{/* {isflash && <Flash color="red" message={message} onClose={onClose} />} */}
			</div>
		</div>
	)
}

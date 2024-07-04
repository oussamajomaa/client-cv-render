
export default function Login({setUsername,setPassword,handleSubmit}) {
  return (
	<div className="flex flex-col justify-center h-screen items-center">
		<h2 className="text-4xl text-center mb-3 font-bold">Connection</h2>
		<form className=" w-[400px] flex flex-col gap-3"
		onSubmit={handleSubmit}>
			<input
				className="input input-bordered input-primary w-full" 
				type="text" 
				placeholder="Saisir le nom d'utilisateur" 
				
				onChange={setUsername}/>
			<input 
				className="input input-bordered input-primary w-full"
				type="password" 
				placeholder="Saisir le mot de passe"
				
				onChange={setPassword} />
			<button className="btn btn-primary">Se connecter</button>
		</form>
	</div>
  )
}

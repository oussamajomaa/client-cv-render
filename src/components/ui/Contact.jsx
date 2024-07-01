import { useEffect, useState } from "react"
import Profile from "../Profile"

const url = "https://api-render-2.onrender.com"
export default function Contact() {
	const [contact, setContact] = useState([])
	async function fetchContact() {
		// const response = await fetch('http://localhost:3333/contact')
		const response = await fetch(`${url}/contact`)
		const data = await response.json()
		setContact(data)
	}

	useEffect(() => {
		fetchContact()
	}, [])
	return (
		<div>
			{contact.length > 0 && 
			<div>

				<Profile nom={contact[0].nom} prenom={contact[0].prenom}/>
				<h2 className="text-4xl text-center text-white bg-blue-600 p-2 rounded-3xl">CONTACT</h2>
				<table>
					<tbody>

						<tr>
							<th>Tel</th>
							<td>{contact[0].tel}</td>
						</tr>
						<tr>
							<th>Email</th>
							<td>{contact[0].email}</td>
						</tr>
						<tr>
							<th>Adresse</th>
							<td>{contact[0].adresse}</td>
						</tr>
					</tbody>
				</table>
			</div>
			}
		</div>
	)
}

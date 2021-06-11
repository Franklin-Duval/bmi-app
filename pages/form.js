import React from "react"
import { useState } from 'react'

export default function Form() {

	const [succes, setSucces] = useState(false)
	const [resultat, setResultat] = useState({})

	const submitForm = (event) => {
		event.preventDefault()

		//local API addresse : http://127.0.0.1:3000/api/form
		fetch("https://imc-app.vercel.app/api/form", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({
				taille: event.target.taille.value,
				poid: event.target.poid.value
			})
		})
		.then((res) => res.json())
		.then((response) => {
			if (response.succes){
				setSucces(true)
				setResultat(response)
			}
			else{
				alert("Verifiez les entrées de vos champs")
			}
		})
		.catch((err) => console.log(err))

	}

	return (
		<div className="body">
			<div className="images">
				<img src="/doctor.svg" width="400" height="500" />
			</div>
			<div>
				<form method="POST" onSubmit={submitForm}>
					<div className="form-group">
						<label htmlFor="taille">Taille (m)</label>
						<input
							type="decimal"
							className="form-control"
							id="taille"
							placeholder="taille"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="poid">Poids (kg)</label>
						<input
							type="number"
							className="form-control"
							id="poid"
							placeholder="poid"
							required
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Valider
					</button>
				</form>

				{
					succes &&
					(
						<div className="resultat">
							<h2>Résultats</h2>
							<p>Votre IMC est de <strong style={{fontSize: 18}}>{resultat.imc}</strong> </p>
							<p>Interprétation : <strong style={{fontSize: 18}}>{resultat.interpretation}</strong></p>
						</div>
					)
				}
			</div>
		</div>
	)
}

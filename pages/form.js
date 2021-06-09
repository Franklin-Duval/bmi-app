import React from "react"
import Link from "next/link"

export default function Form() {
	return (
		<div className="body">
			<div className="images">
				<img src="/doctor.svg" width="400" height="500" />
			</div>
			<div className="body-text">
				<form
					style={{
						height: 300,
						width: 400,
						paddingTop: 50,
					}}
					method="POST"
					action="/api/hello"
				>
					<div className="form-group">
						<label htmlFor="taille">Taille (cm)</label>
						<input
							type="number"
							className="form-control"
							id="taille"
							placeholder="taille"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="poid">Poids (kg)</label>
						<input
							type="number"
							className="form-control"
							id="poid"
							placeholder="poid"
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Valider
					</button>
				</form>
			</div>
		</div>
	)
}

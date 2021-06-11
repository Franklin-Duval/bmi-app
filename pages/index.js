import Link from "next/link"

export default function Home() {
	return (
		<div className="body">
			<div className="images">
				<img src="/doctor.svg" width="400" height="500" />
			</div>
			<div className="body-text">
				<h1 className="title">Calculer votre IMC</h1>

				<Link href="/form">
					<button className="btn btn-primary body-button">Commencez</button>
				</Link>
			</div>
		</div>
	)
}

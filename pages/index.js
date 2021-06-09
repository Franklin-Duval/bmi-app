//import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home({ cars }) {
	return (
		<div className="body">
			<div className="images">
				<img src="/doctor.svg" width="400" height="500" />
			</div>
			<div className="body-text">
				<h1 className="title">Calculer votre IMC</h1>

				<Link href="/form">
					<button className="body-button">Commencez</button>
				</Link>
			</div>
		</div>
	)
}

export async function getStaticProps(context) {
	const cars = await fetch("http://127.0.0.1:3000/api/hello/").then((res) =>
		res.json()
	)

	return {
		props: {
			cars,
		},
	}
}

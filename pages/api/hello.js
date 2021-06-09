// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
	res.status(200).json([
		{
			name: "John Doe",
			surename: "Duval",
		},
		{
			name: "Talom Doe",
			surename: "Duval",
		},
		{
			name: "Yvan Doe",
			surename: "Duval",
		},
	])
}

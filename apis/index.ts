export async function saveFile (data:any) {
    try {
		const response = await fetch('/api/file',{
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(data)
		})
		.catch((error) => console.log("Error!", error))
		return response
	} catch (error: any) {
		throw new Error(error.message)
	}
}
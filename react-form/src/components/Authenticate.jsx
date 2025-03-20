import { useState } from "react"

export default function Authenticate({ token }){
    const [successMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)
    async function handleSubmit(){
        try{
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
                { 
                  method: "GET", 
                  headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
                  }
                })
            const data = await response.json()
            setSuccessMessage(data.message)
        }catch (error){
            setError(error.message)
        }
    }
    return (
        <>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleSubmit}>Authenticate Token</button>
        </>
    )
}
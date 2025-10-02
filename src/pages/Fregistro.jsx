import { useState } from "react"
import Registro from "../componentes/registro"

export default function Fregistro({}){
    const [Nombre,setNombre]=useState('')
    const [Telefono,setTelefono]=useState('')
    const [Correo,setCorreo]=useState('')

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const data={
            Nom:Nombre,
            Tel:Telefono,
            Cor:Correo
        }
        try{
            const res= await fetch('http://localhost:8000/crear',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            if(res.ok){
                const resData=await res.json()
                alert(resData.message)
                setCorreo('')
                setNombre('')
                setTelefono('')
            }
        }
        catch(err){
            console.error(err)
        }
    }
    return(
        <Registro
        handleSubmit={handleSubmit}
        setNombre={setNombre}
        setTelefono={setTelefono}
        setCorreo={setCorreo}
        />
    )
}
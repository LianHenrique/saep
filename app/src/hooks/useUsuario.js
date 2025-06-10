import { useEffect } from "react"

const url = import.meta.env.VITE_API_URL

export function useListaUsuarios(){
    const [usuarios, setUsuarios] = ([])

    useEffect(() => {
        async function fetchData(){
            try{
                const req = await fetch(`${url}/usuarios`)
                const res = await req.json()
                setUsuarios(res)
            }
            catch(erro){
                console.log(erro)
            }
        }
        fetchData()
    }, [])
    return usuarios
}

export function useInserirUsuario(){
    const inserirUsuario = async (data) => {
        try{
            const req = await fetch(`${url}/usuarios`,
                {
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify(data)
                }
            )
            const res = await req.json()
            return res
        }
        catch(erro){
            console.log(erro)
        }
        return {inserirUsuario}
    }
}
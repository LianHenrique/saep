export function useInserirLivro(){
    const inserirLivro = async (data) => {
        try{
            const req = await fetch(`${url}/livros`,
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
        return {inserirLivro}
    }
}

export function useDeletaLivro(){
    const deletarLivro = async (id) => {
        try{
            const req = await fetch(`${url}/livros/${id}`,
                {
                    method:"DELETE"
                }
            )
            const res = await req.json()
            return res
        }
        catch(erro){
            console.log(erro)
        }
        return {deletarLivro}
    }
}

export function useListaLivros(){
    const [livros, setLivros] = ([])

    useEffect(() => {
        async function fetchData(){
            try{
                const req = await fetch(`${url}/livros`)
                const res = await req.json()
                setLivros(res)
            }
            catch(erro){
                console.log(erro)
            }
        }
        fetchData()
    }, [])
    return livros
}
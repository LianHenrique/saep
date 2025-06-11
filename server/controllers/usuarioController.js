import conn from "../conexao.js"

export const buscarUsuarios = (req, res) =>{
    const sql = "SELECT * FROM usuarios"

    conn.query(sql, (erro, resul) => {
        if(erro){
            console.log(erro)
            res.json(erro).end()
        }
        else{
            res.json(resul).end()
        }
    })

}

export const criarUsuario = (req, res) => {
    const nome = req.body.nome
    const email = req.body.email

    const sql = `inser into usuarios(nome, email) values ('${nome}', '${email}')`
    conn.query(sql, (erro) => {
        if(erro){
            console.log(erro);
            res.json(erro.sqlMessage).end()
        }
        else{
            res.json("Cadastro efetuado").end()
        }
    })
}
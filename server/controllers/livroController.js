import conn from "../conexao.js"

export const buscarLivros = (req, res) => {
    const sql = "SELECT * FROM livros"

    conn.query(sql, (erro, resul) => {
        if (erro) {
            console.log(erro)
            res.json(erro).end()
        }
        else {
            res.json(resul).end()
        }
    })

}

export const criarLivro = (req, res) => {
    const titulo = req.body.titulo
    const autor = req.body.autor
    const generos = req.body.generos
    const status = req.body.status
    const usuario = req.body.usuario

    const sql = 
    `inser into livros
    (
    titulo, 
    autor, 
    genero, 
    status, 
    usuario
    ) 
    values 
    (
    '${titulo}', 
    '${autor}', 
    '${generos}', 
    '${status}', 
    '${usuario}')`

    conn.query(sql, (erro) => {
        if (erro) {
            console.log(erro);
            res.json(erro.sqlMessage).end()
        }
        else {
            res.json("Cadastro efetuado").end()
        }
    })
}

export const buscarLivrosPorId = (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM livros where ${id}`

    conn.query(sql, (erro, resul) => {
        if (erro) {
            console.log(erro)
            res.json(erro).end()
        }
        else {
            res.json(resul[0]).end()
        }
    })

}

export const editarLivro = (req, res) => {
    const id = req.params.id
    const titulo = req.body.titulo
    const autor = req.body.autor
    const generos = req.body.generos
    const status = req.body.status
    const usuario = req.body.usuario

    const sql = 
    `update livros 
        set 
        titulo = '${titulo}' 
        autor = '${autor}' 
        genero = '${generos}' 
        status = '${status}' 
        usuario = '${usuario}' 
        where id = ${id}`

    conn.query(sql, (erro) => {
        if (erro) {
            console.log(erro);
            res.json(erro.sqlMessage).end()
        }
        else {
            res.json("Cadastro efetuado").end()
        }
    })
}

export const deletarLivro = (req, res) => {
    const id = req.params.id
    const sql = `deçete * FROM livros where ${id}`

    conn.query(sql, (erro, resul) => {
        if (erro) {
            console.log(erro)
            res.json(erro).end()
        }
        else {
            res.json(resul[0]).end()
        }
    })

}
import { Button } from "bootstrap"
import { useDeletaLivro } from "../hooks/useLivro"

const CardLivro = (props) => {
    const { deletarLivro } = useDeletaLivro()

    const handleDelete = async () => {
        const deletado = await deletarLivro(props.id)
        alert("Deletado")
        window.location.reload()
    }

    return (
        <div>
            <Card
                border="primary"
                style={{
                    with: "18rem"
                }}>
                    <CardLivro.Body>
                        <Card.Text>
                            <b>Titulo:</b><br />{props.titulo}
                        </Card.Text>
                        <Card.Text>
                            <b>Autor:</b><br />{props.autor}
                        </Card.Text>
                        <Card.Text>
                            <b>Genero:</b><br />{props.genero}
                        </Card.Text>
                        <Card.Text>
                            <b>Dono:</b><br />{props.usuario}
                        </Card.Text>
                        <Button
                        size="lg"
                        variant="warning"
                        type="button"
                        href={`/editar_livro/${props.id}`}
                        className="me-3">Editar</Button>
                        <Button
                        size="lg"
                        variant="warning"
                        type="button"
                        onClick={() => {

                        }}>Editar</Button>
                    </CardLivro.Body>
            </Card>
        </div>
    )
}

export default CardLivro
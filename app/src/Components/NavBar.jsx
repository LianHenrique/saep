import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="success" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/home">
                    Biblioteca
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link
                        href="/cadastro_livro">
                        Livro
                    </Nav.Link>
                    <Nav.Link
                        href="/cadastro_usuario">
                        usuario
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar
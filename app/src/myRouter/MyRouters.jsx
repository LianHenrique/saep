import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import CadastroUsuario from "../pages/CadastroUsuario"
import CadastroLivro from "../pages/CadastroLivro"
import EditarLivro from "../pages/EditarLivro"
import App from "../App"

const MyRouters = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: 
        [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/cadastro_usuario",
                element: <CadastroUsuario/>
            },
            {
                path: "/cadastro_livro",
                element: <CadastroLivro/>
            },
            {
                path: "/editar_livro/:id",
                element: <EditarLivro/>
            },
        ]

    }
])

export default MyRouters
import { Outlet } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Container from "react-bootstrap/esm/Container"

function App() {

  return (
    <div>
      <NavBar/>
      <Container>
        <Outlet/>
      </Container>
    </div>
  )
}

export default App

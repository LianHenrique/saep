import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyRouters from "./myRouter/MyRouters"
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={MyRouters} />
  </StrictMode>,
)

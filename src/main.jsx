import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Components/Routers/Routers.jsx'
import { ToastContainer } from 'react-toastify'
import Context from './Components/FriendContext/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>

    <ToastContainer />
  </StrictMode>,
)

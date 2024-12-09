
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster
        position='top-center'


        toastOptions={{
          duration: 5000,
          style: {
            background: "rgba(0,0,0, 0.5)",
            color: "#fff",
            padding: "20px 20px",
            backdropFilter: "blur(20px)"
          }
        }}
      />

    </div>
  )
}

export default App

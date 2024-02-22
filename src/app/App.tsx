import './styles/App.css'
import Navbar from 'features/navbar/Menu'
import { Route, Routes } from 'react-router-dom'
import routesArray from '../entities/routesArray'

function App() {
  return (
    <div className="App">
      <header className="p-5 bg-blue-500 text-white text-lg font-semibold">
        <Navbar />
      </header>
      <Routes>
          {routesArray.map(({ id, component, path }) => {
            return (
              <Route key={id} path={path} Component={component}/>
            )
          })}
      </Routes>
      <footer className="p-5 bg-gray-200 text-center text-gray-600">
        © 2024 My Website. All rights reserved.
      </footer>
    </div>
  )
}

export default App

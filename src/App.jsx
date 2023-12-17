import '../src/style/global.css'
import Nav from "../src/Components/common/Nav"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App

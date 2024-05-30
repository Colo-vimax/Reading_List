import {Routes,Route,Navigate} from "react-router-dom";
import { useAuthContext } from "../src/hooks/useAuthContext"

// components
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'

const App = () => {
  const{ user, authIsReady } = useAuthContext()
  return (
    <div>
      {authIsReady && 
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}></Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path="/signup" element={user ? <Navigate to="/"/> : <Signup />}></Route>
      </Routes>  
      </>}     
    </div>  
  )
}

export default App
//import DashBoard from './pages/DashBoard'
import { SignUp } from './pages/signup'
import { SignIn } from './pages/signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element = {<SignUp />} />
      <Route path='/signin' element = {<SignIn />} />
      <Route path='/dashboard' element = {<DashBoard />} />
    </Routes>
  </BrowserRouter>
  return (
    <SignUp />
  )
}

export default App

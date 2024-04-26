import 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './views/Homepage/Homepage'
import Awards from './views/Awards/Awards'
import Nominees from './views/Nominees/Nominees'
import Blog from './views/Blog/Blog'
import homeProfile from "./assets/images/uploads/people_01.jpg";

function App() {

  return (
    <>
    <Loader />
    <Navbar profileImg={homeProfile} loggedIn={true} />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/awards' element={<Awards />} />
      <Route path='/nominees' element={<Nominees />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App

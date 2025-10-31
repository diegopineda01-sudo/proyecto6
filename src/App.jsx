import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './page1/header.jsx'
import Mainv2 from './page1/mainv2.jsx'
import Footer from './page1/footer.jsx'
import Pagina2 from './page2/pagina2.jsx'

function App() {

  return (
    <div className='contenedorTodo'>
      <Header />
      <Routes>
        <Route path="/proyecto6" element={<Mainv2 />} />
        <Route path="/proyecto6/pagina2" element={<Pagina2 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

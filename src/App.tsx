import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './style/globalStyle'
import AddUser from './pages/AddUser'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Match from './pages/Match'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/match' element={<Match />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

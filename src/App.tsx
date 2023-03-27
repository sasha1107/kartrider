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
      <Header/>
      <Home />
      <Match />
      <Footer/>
    </div>
  )
}

export default App

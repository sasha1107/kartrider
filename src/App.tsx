import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './style/globalStyle'
import AddUser from './pages/AddUser'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Match from './pages/Match'
import styled from 'styled-components'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <StyledContainer>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit' element={<AddUser />} />
            <Route path='/match' element={<Match />} />
          </Routes>
        </StyledContainer>
        <Footer/>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </div>
  )
}

export default App;

const StyledContainer = styled.main`
  /* margin-top:  */ // header 영역
  margin-bottom: 60px; // footer 영역
`

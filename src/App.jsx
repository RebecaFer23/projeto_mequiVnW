import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import * as S from './components/styled'

export default function App() {
  return (
    <>
    <S.GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
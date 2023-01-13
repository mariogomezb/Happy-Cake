import { Route, Routes } from "react-router-dom"
import { Container } from "@mui/system"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Container>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
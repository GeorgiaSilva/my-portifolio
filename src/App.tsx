import { Box } from "@mui/material"
import { Projects } from "./sections/projects"
import { Header } from "./sections/header"
import { Habilidade } from "./sections/skills"
import Footer from "./sections/footer"

function App() {


  return (
    <Box sx={{
      padding: 0,
      margin: 0,
      width: '100vw',
      height: '100vh',
    }}> 
    {/*resumo*/}
    <Header />
    <Habilidade />
    <Projects />
    <Footer />
    </Box>
  )
}

export default App

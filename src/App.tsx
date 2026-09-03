import { Projects } from "./sections/projects"
import { Header } from "./sections/header"
import { Habilidade } from "./sections/skills"
import Footer from "./sections/footer"
import { Navigation } from "./components/navigation"

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Habilidade />
      <Projects />
      <Footer />
    </>
  )
}

export default App

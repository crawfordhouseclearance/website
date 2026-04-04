import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

import Services from "./sections/Services"
import Probate from "./sections/Probate"
import Domestic from "./sections/Domestic"
import Commercial from "./sections/Commercial"
import Jobs from "./sections/Jobs"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <Services />

        <Probate />

        <Domestic />

        <Commercial />

        <Jobs />

        <Contact />

      </main>

      <Footer />
    </>
  )
}
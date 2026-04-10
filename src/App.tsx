import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

import Services from "./sections/Services"
import Probate from "./sections/Probate"
import Domestic from "./sections/Domestic"
import Commercial from "./sections/Commercial"
import Jobs from "./sections/Jobs"
import WorkingWithProfessionals from "./sections/WorkingWithProfessionals"
import Contact from "./sections/Contact"
import Privacy from "./pages/Privacy"
import EbayAuthAccepted from "./pages/EbayAuthAccepted"
import EbayAuthDeclined from "./pages/EbayAuthDeclined"

function Home() {
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

        <WorkingWithProfessionals />

        <Contact />

      </main>

      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/ebay/auth/accepted" element={<EbayAuthAccepted />} />
        <Route path="/ebay/auth/declined" element={<EbayAuthDeclined />} />
      </Routes>
    </BrowserRouter>
  )
}

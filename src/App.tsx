import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { applyPageMeta } from "./seo/pageMeta"
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

/** JSON-LD for `/` only (see Home); business details match site copy and public assets. */
function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Crawford House Clearance",
    url: "https://www.crawfordhouseclearance.co.uk/",
    telephone: "+447459420152",
    email: "gary@crawfordhouseclearance.co.uk",
    logo: "https://www.crawfordhouseclearance.co.uk/images/logo-white.svg",
    image: "https://www.crawfordhouseclearance.co.uk/images/web/home-hero-house-clearance.webp",
    areaServed: [
      "Falkirk",
      "Stirling",
      "Larbert",
      "Grangemouth",
      "Central Scotland",
    ],
    serviceType: [
      "Probate house clearance",
      "Domestic house clearance",
      "Commercial clearance",
    ],
    sameAs: ["https://wa.me/447459420152"],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

function Home() {
  useEffect(() => {
    applyPageMeta("home")
  }, [])

  return (
    <>
      <LocalBusinessJsonLd />
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
  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7522/ingest/5a67757b-9c88-4743-9fdd-c513f0047a20", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "719f15" },
      body: JSON.stringify({
        sessionId: "719f15",
        location: "App.tsx:boot",
        message: "SPA shell loaded",
        data: { pathname: window.location.pathname },
        hypothesisId: "A",
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

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

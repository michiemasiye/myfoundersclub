import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Curriculum from './components/Curriculum'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 selection:bg-primary-light selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <section id="features">
        <Features />
      </section>
      <section id="curriculum">
        <Curriculum />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <CTA />
      <Footer />
    </div>
  )
}

export default App

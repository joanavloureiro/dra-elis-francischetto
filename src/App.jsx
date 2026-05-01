import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

const WHATSAPP_LINK = 'https://wa.me/5527988043123?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.'

export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container section-container">
          <a href="#inicio" className="navbar-logo">
            Dra. Elis Francischetto
          </a>
          <ul className="navbar-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#atendimento">Atendimento</a></li>
            <li><a href="#horarios">Horários</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="navbar-cta">
            Agendar
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Schedule />
        <Contact />
      </main>

      <WhatsAppButton />
    </>
  )
}

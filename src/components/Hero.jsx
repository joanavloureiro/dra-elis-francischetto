import './Hero.css'

const WHATSAPP_LINK = 'https://wa.me/5527988043123?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <svg className="blob blob-top-left" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M320,80 Q360,160 300,260 Q240,360 140,340 Q40,320 20,220 Q0,120 80,60 Q160,0 260,20 Q320,30 320,80 Z" />
      </svg>
      <svg className="blob-line blob-line-top" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M330,70 Q370,150 310,250 Q250,350 150,330 Q50,310 30,210 Q10,110 90,50 Q170,-10 270,10 Q330,20 330,70 Z" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
      </svg>

      <div className="hero-content section-container">
        <div className="hero-text">
          <p className="hero-subtitle">Médica Psiquiatra</p>
          <h1 className="hero-title">Dra. Elis<br />Francischetto</h1>
          <p className="hero-credentials">CRM-ES 17789 &nbsp;|&nbsp; RQE 16207</p>
          
          <p className="hero-description">
            Atendimento Psiquiátrico On-line.
            <br/>
            <em>Adolescentes, adultos e idosos.</em>
          </p>
          
          
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agende sua consulta
          </a>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-frame">
            <img src={`${import.meta.env.BASE_URL}images/foto-principal.jpeg`} alt="Dra. Elis Francischetto - Médica Psiquiatra" />
          </div>
        </div>
      </div>

      <svg className="blob blob-bottom-right" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M320,80 Q360,160 300,260 Q240,360 140,340 Q40,320 20,220 Q0,120 80,60 Q160,0 260,20 Q320,30 320,80 Z" />
      </svg>
      <svg className="blob-line blob-line-bottom" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M330,70 Q370,150 310,250 Q250,350 150,330 Q50,310 30,210 Q10,110 90,50 Q170,-10 270,10 Q330,20 330,70 Z" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
      </svg>

      <div className="hero-ornament">
        <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"/>
          <path d="M16,20 Q20,10 24,20 Q20,30 16,20" fill="none" stroke="var(--color-accent)" strokeWidth="1.2"/>
          <path d="M38,20 Q45,8 55,15 Q65,22 55,30 Q45,38 42,25 Q40,18 50,20 Q55,22 50,26" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"/>
          <path d="M75,20 A8,8 0 1,1 91,20 A8,8 0 1,1 75,20 M83,20 A4,4 0 1,1 87,24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"/>
        </svg>
      </div>
    </section>
  )
}

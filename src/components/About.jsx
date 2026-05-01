import './About.css'

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="section-container">
        <h2 className="about-title">Sobre a Dra. Elis</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Médica formada pela Escola Superior de Ciências da Santa Casa de Misericórdia 
              de Vitória (EMESCAM), com residência médica em Psiquiatria pelo Instituto 
              Capixaba de Ensino, Pesquisa e Inovação em Saúde (ICEPi) em Vitória — Espírito Santo.
            </p>
        
            <br/>
            <br/>
            <p className="about-highlight">
              O tratamento começa com acolhimento. 
            </p>
          </div>
          <div className="about-formation">
            <div className="formation-item">
              <span className="formation-years">2015 – 2021</span>
              <span className="formation-label">Graduação em Medicina</span>
              <span className="formation-place">EMESCAM — Vitória, ES</span>
            </div>
            <div className="formation-divider" />
            <div className="formation-item">
              <span className="formation-years">2023 – 2026</span>
              <span className="formation-label">Residência em Psiquiatria</span>
              <span className="formation-place">ICEPi — Vitória, ES</span>
            </div>
          </div>
        </div>

        <div className="about-gallery">
          <div className="gallery-item">
            <img src="/images/congresso-1.jpeg" alt="Dra. Elis no Congress on Brain, Behavior and Emotions 2025" />
          </div>
          <div className="gallery-item">
            <img src="/images/congresso-2.jpeg" alt="Dra. Elis na XVII Jornada ABP Sudeste de Psiquiatria" />
          </div>
          <div className="gallery-item">
            <img src="/images/congresso-3.jpeg" alt="Dra. Elis no Congress on Brain, Behavior and Emotions 2025" />
          </div>
        </div>
        <p className="gallery-caption">Participação em congressos e jornadas de psiquiatria</p>
      </div>
    </section>
  )
}

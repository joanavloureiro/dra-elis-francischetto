import './Services.css'

const WHATSAPP_LINK = 'https://wa.me/5527988043123?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.'

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2"/>
        <path d="M24,22 Q28,18 32,22 Q36,26 32,30 Q28,34 24,30 Q20,26 24,22Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M36,22 Q40,18 44,22 Q48,26 44,30 Q40,34 36,30 Q32,26 36,22Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M22,38 Q32,32 42,38" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: 'Modalidade',
    description: 'Consulta On-line',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2"/>
        <path d="M24,20 L24,40 L44,40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M24,34 L30,28 L36,32 L42,24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Público atendido',
    description: 'Adolescentes, Adultos e Idosos',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2"/>
        <circle cx="32" cy="32" r="3" fill="currentColor"/>
        <path d="M32,16 L32,32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32,32 L42,38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Duração da consulta',
    description: '50 minutos',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="16" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M20,48 L44,48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28,44 L28,48" stroke="currentColor" strokeWidth="2"/>
        <path d="M36,44 L36,48" stroke="currentColor" strokeWidth="2"/>
        <circle cx="32" cy="30" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32,26 L32,30 L35,32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Plataforma',
    description: 'Google Meet ou WhatsApp',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="12" width="36" height="40" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M14,22 L50,22" stroke="currentColor" strokeWidth="2"/>
        <path d="M22,12 L22,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42,12 L42,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="30" r="2" fill="currentColor"/>
        <circle cx="32" cy="30" r="2" fill="currentColor"/>
        <circle cx="38" cy="30" r="2" fill="currentColor"/>
        <circle cx="26" cy="38" r="2" fill="currentColor"/>
        <circle cx="32" cy="38" r="2" fill="currentColor"/>
        <circle cx="38" cy="38" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Agendamento',
    description: 'Via WhatsApp',
    link: WHATSAPP_LINK,
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="44" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M10,28 L54,28" stroke="currentColor" strokeWidth="2"/>
        <path d="M18,36 L30,36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18,40 L24,40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Forma de pagamento',
    description: 'Consulta Particular — Via Pix',
  },
]

export default function Services() {
  return (
    <section className="services" id="atendimento">
      <div className="section-container">
        <h2 className="services-title">Informações</h2>
        <p className="services-subtitle">Tudo sobre o atendimento psiquiátrico on-line</p>
        <div className="services-grid">
          {services.map((service) => {
            const content = (
              <>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-name">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </>
            )
            return service.link ? (
              <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-card service-card--link" key={service.title}>
                {content}
              </a>
            ) : (
              <div className="service-card" key={service.title}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

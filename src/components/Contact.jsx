import './Contact.css'

const WHATSAPP_LINK = 'https://wa.me/5527988043123?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.'

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <svg className="contact-blob contact-blob-top" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M320,80 Q360,160 300,260 Q240,360 140,340 Q40,320 20,220 Q0,120 80,60 Q160,0 260,20 Q320,30 320,80 Z" />
      </svg>
      <svg className="contact-blob-line contact-blob-line-top" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M330,70 Q370,150 310,250 Q250,350 150,330 Q50,310 30,210 Q10,110 90,50 Q170,-10 270,10 Q330,20 330,70 Z" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
      </svg>

      <div className="section-container contact-content">
        <h2 className="contact-title">Agende sua Consulta</h2>
        <p className="contact-location">Vitória — Espírito Santo</p>

        <div className="contact-card">
          <div className="contact-info">
            <div className="contact-whatsapp-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p className="contact-label">WhatsApp</p>
              <p className="contact-phone">(27) 98804-3123</p>
            </div>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary btn-contact">
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="contact-ornament">
        <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"/>
          <path d="M16,20 Q20,10 24,20 Q20,30 16,20" fill="none" stroke="var(--color-accent)" strokeWidth="1.2"/>
          <path d="M38,20 Q45,8 55,15 Q65,22 55,30 Q45,38 42,25 Q40,18 50,20 Q55,22 50,26" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"/>
          <path d="M75,20 A8,8 0 1,1 91,20 A8,8 0 1,1 75,20 M83,20 A4,4 0 1,1 87,24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5"/>
        </svg>
      </div>

      <svg className="contact-blob contact-blob-bottom" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M320,80 Q360,160 300,260 Q240,360 140,340 Q40,320 20,220 Q0,120 80,60 Q160,0 260,20 Q320,30 320,80 Z" />
      </svg>
      <svg className="contact-blob-line contact-blob-line-bottom" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <path d="M330,70 Q370,150 310,250 Q250,350 150,330 Q50,310 30,210 Q10,110 90,50 Q170,-10 270,10 Q330,20 330,70 Z" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
      </svg>

      <footer className="footer">
        <p>&copy; 2026 Dra. Elis Francischetto — Médica Psiquiatra</p>
        <p className="footer-crm">CRM-ES 17789 | RQE 16207</p>
      </footer>
    </section>
  )
}

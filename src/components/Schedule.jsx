import './Schedule.css'

const schedule = [
  { day: 'Segunda-feira', hours: '8:00 — 20:00' },
  { day: 'Terça-feira', hours: '8:00 — 20:00' },
  { day: 'Quarta-feira', hours: '8:00 — 20:00' },
  { day: 'Quinta-feira', hours: '8:00 — 20:00' },
  { day: 'Sexta-feira', hours: '8:00 — 12:00' },
  { day: 'Sábado', hours: 'Fechado' },
  { day: 'Domingo', hours: 'Fechado' },
]

export default function Schedule() {
  return (
    <section className="schedule" id="horarios">
      <div className="section-container">
        <h2 className="schedule-title">Horários de Atendimento</h2>
        <p className="schedule-subtitle">Consultas com duração média de 50 minutos</p>
        <div className="schedule-table-wrapper">
          <div className="schedule-table">
            {schedule.map((item) => (
              <div
                className={`schedule-row ${item.hours === 'Fechado' ? 'schedule-row--closed' : ''}`}
                key={item.day}
              >
                <span className="schedule-day">{item.day}</span>
                <span className="schedule-divider" />
                <span className="schedule-hours">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

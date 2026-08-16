import { MapPin, Clock, Zap } from 'lucide-react';
import { SERVICE_AREAS_DATA, WORKING_HOURS_DATA } from '../data/nursingData';

export function AreasAndHours() {
  return (
    <section id="areas" className="section-py areas-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge"><MapPin size={13} /> Ibadan Service Reach</div>
          <h2 className="section-title">Service Areas & Practice Hours in Ibadan</h2>
          <p className="section-subtitle">
            I provide in-home private nursing visits across all major zones in Ibadan, Oyo State — 
            from Bodija and Agodi GRA to Oluyole, Ring Road, Jericho, Akobo, and surrounding areas.
          </p>
        </div>

        <div className="areas-grid">
          {/* Left: Area Cards */}
          <div>
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} color="#7a0fbf" /> Where I Provide In-Home Care in Ibadan
            </h3>
            <div className="area-cards-list">
              {SERVICE_AREAS_DATA.map((area, i) => (
                <div key={i} className="area-card">
                  <div className="area-card-region">{area.region}</div>
                  <div className="area-card-areas">{area.areas}</div>
                  <div className="area-card-meta">
                    <span className="area-tag">
                      <Zap size={12} /> {area.responseTime}
                    </span>
                    <span className="area-tag">
                      <Clock size={12} /> {area.availability}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hours Card */}
          <div>
            <div className="hours-card">
              <div className="hours-header">
                <div className="hours-header-title">
                  <Clock size={18} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
                  Practice Hours & Availability
                </div>
                <div className="hours-header-sub">Personally managed in Ibadan by Nurse Adaeze Okonkwo (RN, RM)</div>
              </div>
              <div className="hours-list">
                {WORKING_HOURS_DATA.map((h, i) => (
                  <div key={i} className="hours-item">
                    <div className="hours-service">{h.service}</div>
                    <div className="hours-time">{h.hours}</div>
                    <div className="hours-days">{h.days} · {h.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

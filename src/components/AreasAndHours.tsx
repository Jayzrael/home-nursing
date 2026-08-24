import { MapPin, Clock, Zap, Sparkles } from 'lucide-react';
import { SERVICE_AREAS_DATA, WORKING_HOURS_DATA, DHERM_HEALTH_INFO } from '../data/nursingData';

export function AreasAndHours() {
  return (
    <section id="areas" className="section-py areas-section">
      <div className="container">
        
        <div className="section-header-center">
          <div className="section-badge">
            <Sparkles size={14} className="gold-accent-icon" />
            <span>Reach & Availability</span>
          </div>
          <h2 className="section-title">Service Reach & Availability</h2>
          <p className="section-subtitle">
            Providing scheduled in-home nursing visits across residential communities as well as virtual telehealth consultations nationwide.
          </p>
        </div>

        <div className="areas-grid">
          {/* Left: Area Cards */}
          <div>
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} color="#046A38" /> Where We Provide Care
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
                  Practice Hours & Scheduling
                </div>
                <div className="hours-header-sub">Personally managed by {DHERM_HEALTH_INFO.nurseName} ({DHERM_HEALTH_INFO.nurseQualifications})</div>
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

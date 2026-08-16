import { CheckCircle, X, Home, Building2 } from 'lucide-react';

interface WhyHomeProps {
  onOpenBooking: () => void;
}

const rows = [
  {
    factor: 'Environment',
    home: 'Familiar, comfortable home with family present',
    hospital: 'Clinical ward with unfamiliar surroundings',
  },
  {
    factor: 'Infection Risk',
    home: 'Minimal — zero exposure to hospital-acquired pathogens',
    hospital: 'Higher risk, especially in crowded hospital wards',
  },
  {
    factor: 'Family Involvement',
    home: 'Family is present, informed, and involved in care',
    hospital: 'Strict visiting hours; family often excluded from care',
  },
  {
    factor: 'Cost (Long-Term)',
    home: 'Cost-effective for ongoing chronic care & rehabilitation',
    hospital: 'High daily ward fees, bed charges, and ancillary costs',
  },
  {
    factor: 'Travel & Traffic Stress',
    home: 'Zero travel — nurse arrives directly at your residence in Ibadan',
    hospital: 'Stressful road transport and waiting rooms across Ibadan',
  },
  {
    factor: 'Dedicated Attention',
    home: '1:1 dedicated private nurse throughout the entire visit',
    hospital: 'One ward nurse attending 6 to 12 patients simultaneously',
  },
];

export function WhyHomeCare({ onOpenBooking }: WhyHomeProps) {
  return (
    <section className="section-py why-home-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Why Home Care?</div>
          <h2 className="section-title">Home Nursing vs. Hospital Stay</h2>
          <p className="section-subtitle">
            For post-discharge recovery, chronic disease management, and elderly care — 
            professional home nursing is often the smarter, safer, and more comfortable choice.
          </p>
        </div>

        {/* Visual comparison strip */}
        <div className="why-home-visual-grid">
          <div className="why-home-visual-card home-card">
            <img
              src="/images/nurse-home-visit.jpg"
              alt="Home nursing care in a Nigerian home"
              className="why-home-visual-img"
              loading="lazy"
            />
            <div className="why-home-visual-overlay">
              <div className="why-home-visual-title">
                <Home size={20} /> Home Nursing Care (TheSanitasNurse)
              </div>
            </div>
          </div>
          <div className="why-home-visual-card hospital-card">
            <div className="why-home-hospital-inner">
              <Building2 size={56} className="why-home-hospital-icon" />
              <div className="why-home-hospital-title">Hospital Ward Admission</div>
            </div>
          </div>
        </div>

        {/* Responsive comparison cards / table */}
        <div className="why-home-table-wrap">
          <div className="why-home-table-header">
            <div>Factor</div>
            <div className="home-col-title">🏠 Private Home Nursing (TheSanitasNurse)</div>
            <div className="hosp-col-title">🏥 Hospital Ward Stay</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className={`why-home-table-row ${i % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="why-home-factor-name">{r.factor}</div>
              <div className="why-home-cell home-cell">
                <CheckCircle size={16} color="#059669" className="cell-icon" />
                <span>{r.home}</span>
              </div>
              <div className="why-home-cell hosp-cell">
                <X size={16} color="#dc2626" className="cell-icon" />
                <span>{r.hospital}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="why-home-cta-wrap">
          <button className="btn btn-primary btn-lg" onClick={onOpenBooking}>
            Book Private Home Nursing Care
          </button>
        </div>
      </div>
    </section>
  );
}

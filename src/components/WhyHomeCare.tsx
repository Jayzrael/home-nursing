import { CheckCircle, X, Home, Building2, Sparkles, Heart } from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

interface WhyHomeProps {
  onOpenBooking: () => void;
}

const rows = [
  {
    factor: 'Environment',
    home: 'Familiar, comforting home setting with family presence and emotional security',
    hospital: 'Sterile clinical ward with unfamiliar surroundings and restricted family access',
  },
  {
    factor: 'Infection Risk',
    home: 'Minimal — zero exposure to hospital-acquired cross-infections or multi-drug resistant germs',
    hospital: 'Higher infection risk, especially in crowded surgical and medical wards',
  },
  {
    factor: 'Family Communication',
    home: 'Direct WhatsApp and phone reports from Nurse Adeyemi after every visit',
    hospital: 'Strict visiting windows; difficult to get immediate physician updates',
  },
  {
    factor: 'Cost & Transparency',
    home: 'Cost-effective transparent rates for ongoing chronic care & rehabilitation',
    hospital: 'High daily ward fees, bed charges, admission deposits, and ancillary expenses',
  },
  {
    factor: 'Travel & Traffic Stress',
    home: 'Zero travel — licensed nurse arrives directly at your doorstep',
    hospital: 'Exhausting commutes, traffic delays, and crowded waiting rooms',
  },
  {
    factor: 'Dedicated Attention',
    home: '1:1 dedicated private nurse attention throughout the entire appointment',
    hospital: 'One ward nurse divided across 6 to 12 patients simultaneously',
  },
];

export function WhyHomeCare({ onOpenBooking }: WhyHomeProps) {
  return (
    <section className="section-py why-home-section">
      <div className="container">
        
        <div className="section-header-center">
          <div className="section-badge">
            <Sparkles size={14} className="gold-accent-icon" />
            <span>The Value of In-Home Care</span>
          </div>
          <h2 className="section-title">Home Nursing vs. Hospital Stay</h2>
          <p className="section-subtitle">
            For post-discharge recovery, chronic illness monitoring, and maternal care — professional home nursing offers greater comfort, hygiene, and individualized attention.
          </p>
        </div>

        {/* Visual comparison strip */}
        <div className="why-home-visual-grid">
          <div className="why-home-visual-card home-card">
            <div className="why-home-visual-inner">
              <div className="why-home-icon-gold">
                <Home size={38} />
              </div>
              <div className="why-home-visual-title">
                {DHERM_HEALTH_INFO.displayName}
              </div>
              <p className="why-home-visual-sub">
                Personalized 1-on-1 bedside nursing in the safety and comfort of your home.
              </p>
            </div>
          </div>
          <div className="why-home-visual-card hospital-card">
            <div className="why-home-hospital-inner">
              <Building2 size={38} className="why-home-hospital-icon" />
              <div className="why-home-hospital-title">Crowded Hospital Ward</div>
              <p className="why-home-visual-sub">
                Fragmented attention, rigid visiting hours, and travel fatigue.
              </p>
            </div>
          </div>
        </div>

        {/* Responsive comparison table */}
        <div className="why-home-table-wrap">
          <div className="why-home-table-header">
            <div>Care Dimension</div>
            <div className="home-col-title">🌿 DhermHealthConnect (In-Home)</div>
            <div className="hosp-col-title">🏥 Hospital Ward Stay</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className={`why-home-table-row ${i % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="why-home-factor-name">{r.factor}</div>
              <div className="why-home-cell home-cell">
                <CheckCircle size={16} color="#046A38" className="cell-icon" />
                <span>{r.home}</span>
              </div>
              <div className="why-home-cell hosp-cell">
                <X size={16} color="#DC2626" className="cell-icon" />
                <span>{r.hospital}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="why-home-cta-wrap">
          <button className="btn btn-primary btn-lg" onClick={onOpenBooking}>
            <Heart size={16} /> Book Private Home Nursing Care
          </button>
        </div>

      </div>
    </section>
  );
}

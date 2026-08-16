import { ShieldCheck, UserCheck, Activity, ArrowRight, Heart, Phone } from 'lucide-react';
import { THESANITAS_NURSE_INFO } from '../data/nursingData';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigate?: (page: string) => void;
}

const symptoms = [
  'Elderly parent needing care',
  'Post-surgery wound care',
  'Bedridden patient nursing',
  'Antenatal / postnatal support',
  'Diabetic foot management',
  'Stroke recovery nursing',
  'Pressure ulcer prevention',
];

export function Hero({ onOpenBooking, onNavigate: _ }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left */}
          <div>
            <div className="hero-badge">
              <Activity size={13} />
              Licensed Registered Nurse & Midwife (NMCN) · Based in Ibadan, Oyo State
            </div>

            <h1 className="hero-headline">
              Dedicated Private
              <br />
              <span>Home Nursing Care</span>
            </h1>

            <p className="hero-lead">
              I bring hospital-grade clinical nursing directly to your home in Ibadan (Bodija, Oluyole,
              Jericho, Ring Road, Akobo & beyond). Whether caring for an aging parent, dressing complex wounds,
              or supporting a new mother, you get <strong>100% direct care continuity</strong> from the same certified nurse every visit.
              Starting from <strong>₦15,000/visit</strong>.
            </p>

            {/* Symptom Pills */}
            <div className="hero-symptom-box">
              <div className="hero-symptom-label">
                <Heart size={13} color="#7a0fbf" />
                What type of care does your family need in Ibadan?
              </div>
              <div className="symptom-pills">
                {symptoms.map((s, i) => (
                  <button key={i} className="symptom-pill" onClick={onOpenBooking}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg" onClick={onOpenBooking}>
                Book a Home Visit <ArrowRight size={17} />
              </button>
              <a
                href={`https://wa.me/${THESANITAS_NURSE_INFO.whatsappNumber}?text=${encodeURIComponent(THESANITAS_NURSE_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Phone size={17} /> WhatsApp Direct
              </a>
            </div>

            <div className="hero-stats">
              {THESANITAS_NURSE_INFO.stats.map((s, i) => (
                <div key={i} className="hero-stat-item">
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image with floating cards */}
          <div className="hero-visual">
            <div className="hero-img-frame">
              <img
                src="/images/nurse-bp-check.jpg"
                alt="Nurse Adaeze (TheSanitasNurse) checking blood pressure of an elderly patient at home in Ibadan"
                loading="eager"
              />
            </div>

            <div className="floating-card top-right">
              <div className="fc-icon purple">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="fc-text-title">NMCN Licensed RN & RM</div>
                <div className="fc-text-sub">Fully certified in Ibadan, Oyo State</div>
              </div>
            </div>

            <div className="floating-card bottom-left">
              <div className="fc-icon green">
                <UserCheck size={18} />
              </div>
              <div>
                <div className="fc-text-title">100% Care Continuity</div>
                <div className="fc-text-sub">Always Nurse Adaeze, zero strangers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

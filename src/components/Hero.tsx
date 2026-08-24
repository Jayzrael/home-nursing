import { ShieldCheck, UserCheck, ArrowRight, Phone, Sparkles, Clock, Heart } from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigate?: (page: string) => void;
}

const serviceChips = [
  'Online Nursing Consultation',
  'Health Education & Diet',
  'BP & Diabetes Monitoring',
  'Wound Care & Dressing',
  'Medication Education',
  'Antenatal & Postnatal Care',
  'Home Nursing Visits',
];

export function Hero({ onOpenBooking, onNavigate }: HeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & CTAs */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} className="gold-accent-icon" />
              <span>Registered Nurse & Midwife ({DHERM_HEALTH_INFO.nurseQualifications})</span>
            </div>

            <h1 className="hero-headline">
              Compassionate, Professional <br />
              <span>Nursing Care</span> — Wherever You Are.
            </h1>

            <p className="hero-lead">
              <strong>DhermHealthConnect</strong> brings skilled, licensed nursing care straight to your home — from routine health monitoring to wound care and maternal support. Professional, private, and personal.
            </p>

            {/* Quick Service Selection Chips */}
            <div className="hero-symptom-box">
              <div className="hero-symptom-label">
                <Heart size={14} className="gold-accent-icon" />
                <span>What type of nursing support do you need today?</span>
              </div>
              <div className="symptom-pills">
                {serviceChips.map((s, i) => (
                  <button key={i} className="symptom-pill" onClick={onOpenBooking}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <button className="btn btn-primary btn-lg" onClick={onOpenBooking}>
                Book an Appointment <ArrowRight size={17} />
              </button>
              <a
                href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <Phone size={17} /> WhatsApp Direct
              </a>
              {onNavigate && (
                <button
                  className="btn btn-gold-ghost btn-lg"
                  onClick={() => onNavigate('services')}
                >
                  View 7 Services
                </button>
              )}
            </div>

            {/* Key Clinical Stats */}
            <div className="hero-stats">
              {DHERM_HEALTH_INFO.stats.map((s, i) => (
                <div key={i} className="hero-stat-item">
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Flat 2D Illustrated Vector Scene (No Photoreal Faces) */}
          <div className="hero-visual">
            <div className="vector-scene-card">
              
              {/* Background Glow & Ambient Waves */}
              <div className="scene-ambient-glow"></div>
              <div className="scene-gold-rays"></div>

              {/* 2D Vector Illustration Container */}
              <div className="hero-svg-wrapper">
                <svg viewBox="0 0 520 400" className="hero-illustration-svg" aria-label="Flat 2D illustration of professional nurse caregiver checking vitals in a warm home environment">
                  <defs>
                    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0B6E4F" />
                      <stop offset="100%" stopColor="#046A38" />
                    </linearGradient>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5D77F" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#AA820A" />
                    </linearGradient>
                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F4FAF6" />
                      <stop offset="100%" stopColor="#E6F4EC" />
                    </linearGradient>
                    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#046A38" floodOpacity="0.15" />
                    </filter>
                  </defs>

                  {/* Room Backing */}
                  <rect x="20" y="20" width="480" height="360" rx="28" fill="url(#bgGrad)" stroke="#C6E7D2" strokeWidth="2" />
                  
                  {/* Decorative Window with Gold Morning Rays */}
                  <g opacity="0.6">
                    <rect x="50" y="50" width="110" height="130" rx="14" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="1.5" />
                    <line x1="105" y1="50" x2="105" y2="180" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3,3" />
                    <line x1="50" y1="115" x2="160" y2="115" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3,3" />
                    {/* Sun glow */}
                    <circle cx="105" cy="115" r="28" fill="#FDF6D8" opacity="0.8" />
                  </g>

                  {/* Cozy Home Plant */}
                  <g transform="translate(60, 240)">
                    <path d="M20 70 L35 70 L30 100 L25 100 Z" fill="#B89324" />
                    {/* Leaves swaying */}
                    <path d="M28 70 Q10 40 5 20 Q20 30 28 70" fill="#0B6E4F" opacity="0.85" className="sway-leaf-1" />
                    <path d="M28 70 Q45 35 55 15 Q45 35 28 70" fill="#046A38" opacity="0.9" className="sway-leaf-2" />
                    <path d="M28 70 Q28 25 28 5 Q32 25 28 70" fill="#D4AF37" opacity="0.8" className="sway-leaf-3" />
                  </g>

                  {/* Caregiver Nurse (Faceless Flat Vector in Emerald Scrub) */}
                  <g transform="translate(160, 70)" filter="url(#softShadow)">
                    {/* Head / Hair */}
                    <ellipse cx="75" cy="55" rx="24" ry="26" fill="#2D4A3E" />
                    <circle cx="75" cy="60" r="18" fill="#FADCB9" />
                    {/* Stethoscope */}
                    <path d="M62 82 C62 105 88 105 88 82" fill="none" stroke="url(#goldGrad)" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="75" cy="106" r="4" fill="#D4AF37" />
                    {/* Emerald Scrub Body */}
                    <path d="M45 88 C45 80 105 80 105 88 L115 190 C115 196 35 196 35 190 Z" fill="url(#emeraldGrad)" />
                    {/* Pocket with Gold Medical Cross */}
                    <rect x="52" y="115" width="20" height="24" rx="4" fill="#03522B" />
                    <path d="M62 121 L62 133 M56 127 L68 127" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
                    
                    {/* Nurse Arm holding BP / vitals tool */}
                    <path d="M45 105 Q15 140 30 170 Q45 160 55 130" fill="#046A38" />
                    <circle cx="30" cy="170" r="9" fill="#FADCB9" />
                  </g>

                  {/* Patient Arm & Cozy Seating (Minimalist Vector) */}
                  <g transform="translate(290, 160)">
                    {/* Armchair Cushion */}
                    <rect x="0" y="30" width="130" height="110" rx="20" fill="#E2EBE5" />
                    {/* Patient Arm resting gently */}
                    <path d="M-20 60 Q20 50 60 55 Q70 65 50 75 Q10 70 -20 70" fill="#E8C39E" />
                    {/* Blood Pressure Cuff & Gold Display Monitor */}
                    <rect x="0" y="46" width="38" height="22" rx="4" fill="#046A38" stroke="#D4AF37" strokeWidth="1.5" />
                    <path d="M38 57 Q70 57 80 80" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="3,2" />
                    
                    {/* Digital Monitor Display */}
                    <g transform="translate(70, 75)">
                      <rect x="0" y="0" width="55" height="40" rx="8" fill="#FFFFFF" stroke="#046A38" strokeWidth="2" />
                      <text x="8" y="18" fill="#046A38" fontSize="11" fontWeight="bold" fontFamily="sans-serif">118/76</text>
                      <text x="8" y="32" fill="#D4AF37" fontSize="9" fontWeight="600" fontFamily="sans-serif">♥ 72 bpm</text>
                    </g>
                  </g>

                  {/* Animated Heartbeat / Pulse Wave Line */}
                  <g transform="translate(120, 310)">
                    <rect x="0" y="0" width="280" height="44" rx="12" fill="#FFFFFF" stroke="#C6E7D2" strokeWidth="1.5" />
                    <path d="M15 22 L70 22 L80 8 L90 36 L100 16 L110 28 L120 22 L265 22" fill="none" stroke="#046A38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pulse-animated-path" />
                    <circle cx="90" cy="36" r="4" fill="#D4AF37" className="pulse-dot-glow" />
                  </g>
                </svg>
              </div>

              {/* Floating Verified Trust Badges */}
              <div className="floating-card top-right">
                <div className="fc-icon gold">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="fc-text-title">RN, RM, BLS, BNSc</div>
                  <div className="fc-text-sub">Licensed Nursing Practitioner</div>
                </div>
              </div>

              <div className="floating-card bottom-left">
                <div className="fc-icon emerald">
                  <UserCheck size={18} />
                </div>
                <div>
                  <div className="fc-text-title">100% Care Continuity</div>
                  <div className="fc-text-sub">Direct one-on-one attention</div>
                </div>
              </div>

              <div className="floating-card bottom-right-sub">
                <div className="fc-icon time">
                  <Clock size={16} />
                </div>
                <div>
                  <div className="fc-text-title">Rapid In-Home Dispatch</div>
                  <div className="fc-text-sub">Flexible shift scheduling</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

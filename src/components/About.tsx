import {
  ShieldCheck,
  Heart,
  Baby,
  Activity,
  Bandage,
  BookOpen,
  Shield,
  Phone,
  Calendar,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

interface AboutProps {
  onOpenBooking?: () => void;
}

const expertiseList = [
  {
    title: 'Pediatric & Maternal-Child Health',
    icon: <Baby size={20} />,
    desc: 'Comprehensive infant growth monitoring, newborn cord hygiene, immunization guidance, and post-delivery maternal care.'
  },
  {
    title: 'Emergency Response & Triage',
    icon: <Activity size={20} />,
    desc: 'Rapid vital signs stabilization, clinical acuity assessment, and swift triage escalation protocols.'
  },
  {
    title: 'Wound Care & IV Management',
    icon: <Bandage size={20} />,
    desc: 'Aseptic wound dressing for surgical incisions, C-sections, diabetic ulcers, and safe IV therapy support.'
  },
  {
    title: 'Patient Education & Counseling',
    icon: <BookOpen size={20} />,
    desc: 'Empowering families with disease management literacy, medication adherence, and dietary lifestyle coaching.'
  },
  {
    title: 'Infection Control & Safety Standards',
    icon: <Shield size={20} />,
    desc: 'Strict infection prevention protocols, sterile equipment handling, and hygienic home environment optimization.'
  }
];

export function About({ onOpenBooking }: AboutProps) {
  return (
    <section id="about" className="section-py about-section">
      <div className="container">

        <div className="about-grid">

          {/* Left Column: 2D Illustrated Caregiver Emblem & Accreditation Card */}
          <div className="about-visual-col">
            <div className="about-graphic-card">

              {/* Abstract 2D Vector Caregiver with Pulsing Gold Heart Aura */}
              <div className="about-svg-wrap">
                <svg viewBox="0 0 400 380" className="about-care-svg" aria-label="Flat 2D vector caregiver graphic with glowing medical insignia">
                  <defs>
                    <linearGradient id="careEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0B6E4F" />
                      <stop offset="100%" stopColor="#046A38" />
                    </linearGradient>
                    <radialGradient id="goldPulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#F5D77F" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F0FDF4" />
                    </linearGradient>
                  </defs>

                  {/* Outer Gold Aura Pulse */}
                  <circle cx="200" cy="180" r="140" fill="url(#goldPulse)" className="pulse-aura-anim" />

                  {/* Shield Frame */}
                  <path
                    d="M200 40 L310 90 L310 220 C310 290 200 340 200 340 C200 340 90 290 90 220 L90 90 Z"
                    fill="url(#shieldGrad)"
                    stroke="#046A38"
                    strokeWidth="3"
                  />

                  {/* Stylized Nurse Silhouette in Emerald */}
                  <g transform="translate(140, 110)">
                    {/* Head */}
                    <circle cx="60" cy="35" r="22" fill="#046A38" />
                    {/* Glowing Heart Cross in Hands */}
                    <circle cx="60" cy="95" r="28" fill="#D4AF37" opacity="0.95" />
                    <path d="M60 82 L60 108 M47 95 L73 95" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                    {/* Caring Hands wrapping around */}
                    <path d="M25 90 C35 125 85 125 95 90 C85 85 35 85 25 90 Z" fill="#0B6E4F" />
                    {/* Torso */}
                    <path d="M30 60 C30 55 90 55 90 60 L98 120 C98 125 22 125 22 120 Z" fill="url(#careEmerald)" opacity="0.8" />
                  </g>

                  {/* Certified Badges around frame */}
                  <g transform="translate(125, 305)">
                    <rect x="0" y="0" width="150" height="36" rx="18" fill="#046A38" stroke="#D4AF37" strokeWidth="1.5" />
                    <text x="75" y="23" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif">RN · RM · BLS · BNSc</text>
                  </g>
                </svg>
              </div>

              {/* Verified Credentials Pill */}
              <div className="about-credentials-pill">
                <ShieldCheck size={20} className="emerald-accent-icon" />
                <div>
                  <div className="cred-title">Emmanuel Damilola Mary</div>
                  <div className="cred-sub">Registered Nurse & Midwife</div>
                </div>
              </div>

              {/* Quick Fact Badges */}
              <div className="about-facts-grid">
                <div className="fact-item">
                  <div className="fact-val">2020</div>
                  <div className="fact-lbl">Clinical Exposure</div>
                </div>
                <div className="fact-item">
                  <div className="fact-val">100%</div>
                  <div className="fact-lbl">Direct Continuity</div>
                </div>
                <div className="fact-item">
                  <div className="fact-val">4 Certs</div>
                  <div className="fact-lbl">RN, RM, BLS, BNSc</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Expertise Areas */}
          <div className="about-content-col">
            <div className="section-badge">
              <Sparkles size={14} className="gold-accent-icon" />
              <span>Meet Your Nurse</span>
            </div>

            <h2 className="section-title">
              Emmanuel Damilola Mary <span className="qualifications-tag">(RN, RM, BLS, BNSc)</span>
            </h2>

            <p className="about-lead">
              {DHERM_HEALTH_INFO.shortBio}
            </p>

            {/* Philosophy Callout Card */}
            <div className="about-philosophy-card">
              <div className="philosophy-icon">
                <Heart size={24} />
              </div>
              <div className="philosophy-text">
                <h4 className="philosophy-heading">Approach to Patient Care</h4>
                <p className="philosophy-quote">
                  "{DHERM_HEALTH_INFO.careApproach}"
                </p>
              </div>
            </div>

            {/* 5 Core Areas of Expertise */}
            <div className="about-expertise-section">
              <h3 className="expertise-header-title">Areas of Clinical Expertise</h3>
              <div className="expertise-grid">
                {expertiseList.map((exp, idx) => (
                  <div key={idx} className="expertise-card">
                    <div className="expertise-icon-wrap">
                      {exp.icon}
                    </div>
                    <div className="expertise-info">
                      <div className="expertise-title">
                        <CheckCircle2 size={16} className="emerald-check" />
                        <span>{exp.title}</span>
                      </div>
                      <p className="expertise-desc">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="about-actions">
              {onOpenBooking && (
                <button className="btn btn-primary" onClick={onOpenBooking}>
                  <Calendar size={16} /> Book an Appointment
                </button>
              )}
              <a
                href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Phone size={16} /> Speak with Nurse Emmanuel Damilola Mary
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

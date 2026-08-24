import { CheckCircle, Shield, Award, Heart, Stethoscope, Sparkles } from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

export function NurseVetting() {
  const credentials = [
    {
      title: 'Registered Nurse & Midwife (RN, RM)',
      desc: 'Dual professional licensure with continuous active clinical certification across general nursing and midwifery.',
      icon: <Shield size={20} />
    },
    {
      title: 'BLS & BNSc Certified',
      desc: 'Certified in Basic Life Support (BLS) and holding a Bachelor of Nursing Science (BNSc) degree.',
      icon: <Award size={20} />
    },
    {
      title: 'Clinical Training Since 2020',
      desc: 'Extensive hands-on training across pediatric, medical-surgical, emergency, and psychiatric nursing environments.',
      icon: <Heart size={20} />
    },
    {
      title: 'Sterile Asepsis & Wound Management',
      desc: 'Hospital-benchmark sterile techniques for post-surgical incisions, C-sections, and chronic diabetic ulcer care.',
      icon: <Stethoscope size={20} />
    }
  ];

  const standards = [
    {
      step: '01',
      title: 'Certified & Verified',
      desc: 'Holding full credentials as RN, RM, BLS, and BNSc with rigorous training and verified professional nursing integrity.',
      color: '#046A38',
      bg: '#E8F5EE',
    },
    {
      step: '02',
      title: 'Hospital-Grade Asepsis',
      desc: 'Strict adherence to sterile technique, single-use clinical materials, accurate vitals tracking, and physician collaboration.',
      color: '#0B6E4F',
      bg: '#E8F5EE',
    },
    {
      step: '03',
      title: 'Guaranteed 1:1 Continuity',
      desc: 'You never get a rotating roster of unfamiliar temp staff. Nurse Adeyemi personally handles every scheduled visit.',
      color: '#B89324',
      bg: '#FBF5E6',
    },
  ];

  return (
    <section className="section-py vetting-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <Sparkles size={14} className="gold-accent-icon" />
            <span>Professional Clinical Credentials</span>
          </div>
          <h2 className="section-title">Adeyemi Damilola Mary ({DHERM_HEALTH_INFO.nurseQualifications})</h2>
          <p className="section-subtitle">
            Registered Nurse & Midwife delivering dedicated, compassionate clinical home care and virtual health support.
          </p>
        </div>

        {/* Solo Nurse Profile Feature Card */}
        <div className="vetting-profile-card">
          <div className="vetting-profile-grid">
            
            {/* 2D Vector Visual Badge */}
            <div className="vetting-photo-col">
              <div className="vetting-vector-frame">
                <svg viewBox="0 0 280 280" className="vetting-vector-svg" aria-label="Flat 2D vector nurse caregiver emblem">
                  <circle cx="140" cy="140" r="125" fill="#E8F5EE" stroke="#046A38" strokeWidth="3" />
                  <circle cx="140" cy="140" r="105" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4,3" />
                  
                  {/* Nurse Silhouette */}
                  <g transform="translate(70, 45)">
                    <circle cx="70" cy="45" r="28" fill="#2D4A3E" />
                    <circle cx="70" cy="50" r="22" fill="#FADCB9" />
                    {/* Scrub */}
                    <path d="M30 85 C30 75 110 75 110 85 L120 170 C120 175 20 175 20 170 Z" fill="#046A38" />
                    {/* Stethoscope */}
                    <path d="M55 80 C55 105 85 105 85 80" fill="none" stroke="#D4AF37" strokeWidth="3" />
                    <circle cx="70" cy="106" r="4" fill="#D4AF37" />
                    {/* Gold Cross */}
                    <rect x="58" y="115" width="24" height="24" rx="4" fill="#0B6E4F" />
                    <path d="M70 120 L70 134 M63 127 L77 127" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <div className="vetting-badge-wrap">
                <div className="vetting-nmcn-badge">
                  <Shield size={13} /> {DHERM_HEALTH_INFO.nurseQualifications} Certified
                </div>
              </div>
            </div>

            {/* Bio & Credentials */}
            <div className="vetting-info-col">
              <div className="vetting-role-tag">
                Lead Clinical Practitioner · DhermHealthConnect
              </div>
              <h3 className="vetting-quote">
                "{DHERM_HEALTH_INFO.careApproach}"
              </h3>
              <p className="vetting-bio-text">
                {DHERM_HEALTH_INFO.shortBio}
              </p>

              {/* 4 Credential items */}
              <div className="vetting-credentials-grid">
                {credentials.map((c, i) => (
                  <div key={i} className="vetting-cred-item">
                    <div className="vetting-cred-title">
                      {c.icon} <span>{c.title}</span>
                    </div>
                    <div className="vetting-cred-desc">
                      {c.desc}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* 3 Pillars of Practice */}
        <div className="vetting-standards-grid">
          {standards.map((s, i) => (
            <div key={i} className="vetting-standard-card">
              <div className="vetting-standard-step">{s.step}</div>
              <div className="vetting-standard-icon" style={{ background: s.bg, color: s.color }}>
                <CheckCircle size={24} />
              </div>
              <h3 className="vetting-standard-title">{s.title}</h3>
              <p className="vetting-standard-desc">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

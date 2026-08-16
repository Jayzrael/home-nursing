import { CheckCircle, Shield, Award, Heart, Stethoscope } from 'lucide-react';

/**
 * NurseVetting — Solo Nurse Profile & Clinical Verification
 */
export function NurseVetting() {
  const credentials = [
    {
      title: 'NMCN Registered Nurse (RN)',
      desc: 'Certified by the Nursing and Midwifery Council of Nigeria with continuous active clinical licensure.',
      icon: <Shield size={20} />
    },
    {
      title: 'NMCN Registered Midwife (RM)',
      desc: 'Specialized maternal and neonatal clinical certification for antenatal, postnatal, and infant care.',
      icon: <Heart size={20} />
    },
    {
      title: '8+ Years Clinical Practice',
      desc: 'Extensive hands-on ward, surgical recovery, and private home care nursing experience across top Nigerian hospitals.',
      icon: <Award size={20} />
    },
    {
      title: 'Advanced Wound Care & Asepsis',
      desc: 'Trained in sterile wound debridement, post-surgical incision dressing, and bedsore prevention techniques.',
      icon: <Stethoscope size={20} />
    }
  ];

  const standards = [
    {
      step: '01',
      title: 'Licensed & Verified',
      desc: 'Active NMCN registration (Licence No. NMCN/RN/0087432), NIN identity verified, and background-checked for absolute family safety.',
      color: '#7a0fbf',
      bg: 'var(--lilac)',
    },
    {
      step: '02',
      title: 'Hospital-Grade Asepsis',
      desc: 'Strict adherence to sterile technique, single-use clinical materials, accurate vital sign logs, and physician escalation protocols.',
      color: '#059669',
      bg: '#ecfdf5',
    },
    {
      step: '03',
      title: 'Guaranteed 1:1 Continuity',
      desc: 'You never get a rotating roster of unfamiliar temp nurses. I personally handle your loved one\'s care at every single scheduled visit.',
      color: '#d97706',
      bg: '#fff7ed',
    },
  ];

  return (
    <section className="section-py vetting-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header-center">
          <div className="section-badge">Meet Your Private Nurse</div>
          <h2 className="section-title">Nurse Adaeze Okonkwo (RN, RM)</h2>
          <p className="section-subtitle">
            Licensed Registered Nurse and Midwife providing dedicated, personalized clinical home care in Nigeria.
          </p>
        </div>

        {/* Solo Nurse Profile Feature Card */}
        <div className="vetting-profile-card">
          <div className="vetting-profile-grid">
            
            {/* Photo & Badge */}
            <div className="vetting-photo-col">
              <div className="vetting-photo-frame">
                <img
                  src="/images/nurse-bp-check.jpg"
                  alt="Nurse Adaeze Okonkwo - TheSanitasNurse"
                  className="vetting-photo-img"
                  loading="lazy"
                />
              </div>
              <div className="vetting-badge-wrap">
                <div className="vetting-nmcn-badge">
                  <Shield size={13} /> NMCN Licenced: NMCN/RN/0087432
                </div>
              </div>
            </div>

            {/* Bio & Credentials */}
            <div className="vetting-info-col">
              <div className="vetting-role-tag">
                Founder & Lead Practitioner
              </div>
              <h3 className="vetting-quote">
                "My mission is to treat every patient with the clinical precision of a hospital and the warmth of family."
              </h3>
              <p className="vetting-bio-text">
                With over 8 years of hospital-based ward nursing and private home practice in Nigeria, I founded <strong>TheSanitasNurse</strong> to solve a major problem Nigerian families face: lack of consistent, trustworthy, and hospital-grade bedside nursing at home. When you work with me, you communicate directly with your nurse and receive uncompromised 1:1 attention.
              </p>

              {/* 4 Credential items */}
              <div className="vetting-credentials-grid">
                {credentials.map((c, i) => (
                  <div key={i} className="vetting-cred-item">
                    <div className="vetting-cred-title">
                      {c.icon} {c.title}
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

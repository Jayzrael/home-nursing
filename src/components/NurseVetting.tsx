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
    <section className="section-py" style={{ background: 'var(--surface)' }}>
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
        <div style={{ background: 'white', border: '1.5px solid var(--lilac-border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', marginBottom: '3.5rem', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '3rem', alignItems: 'center' }}>
            
            {/* Photo & Badge */}
            <div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '4px solid var(--lilac)', boxShadow: 'var(--shadow-sm)', marginBottom: '1rem' }}>
                <img
                  src="/images/nurse-bp-check.jpg"
                  alt="Nurse Adaeze Okonkwo - TheSanitasNurse"
                  style={{ width: '100%', height: '340px', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--lilac)', color: 'var(--primary-mid)', fontSize: '0.8rem', fontWeight: 800, padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-pill)', border: '1px solid var(--lilac-border)' }}>
                  <Shield size={13} /> NMCN Licenced: NMCN/RN/0087432
                </div>
              </div>
            </div>

            {/* Bio & Credentials */}
            <div>
              <div style={{ display: 'inline-block', color: 'var(--purple)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                Founder & Lead Practitioner
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1rem' }}>
                "My mission is to treat every patient with the clinical precision of a hospital and the warmth of family."
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', fontSize: '0.97rem', marginBottom: '1.5rem' }}>
                With over 8 years of hospital-based ward nursing and private home practice in Nigeria, I founded <strong>TheSanitasNurse</strong> to solve a major problem Nigerian families face: lack of consistent, trustworthy, and hospital-grade bedside nursing at home. When you work with me, you communicate directly with your nurse and receive uncompromised 1:1 attention.
              </p>

              {/* 4 Credential items */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {credentials.map((c, i) => (
                  <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--lilac-border)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--purple)', fontWeight: 800, fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                      {c.icon} {c.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
                      {c.desc}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* 3 Pillars of Practice */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
          {standards.map((s, i) => (
            <div key={i} style={{ background: 'white', border: '1.5px solid var(--lilac-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', position: 'relative', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontFamily: 'Outfit', fontSize: '2.5rem', fontWeight: 900, color: 'var(--lilac-border)', lineHeight: 1 }}>{s.step}</div>
              <div style={{ width: 50, height: 50, borderRadius: 12, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontWeight: 800 }}>
                <CheckCircle size={24} />
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

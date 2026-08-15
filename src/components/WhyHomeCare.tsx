import { CheckCircle, X, Home, Building2 } from 'lucide-react';

interface WhyHomeProps {
  onOpenBooking: () => void;
}

const rows = [
  {
    factor: 'Environment',
    home: 'Familiar, comfortable home with family present',
    hospital: 'Clinical ward with unfamiliar surroundings',
    homeWins: true,
  },
  {
    factor: 'Infection Risk',
    home: 'Minimal — patient not exposed to hospital-acquired infections (MRSA, etc.)',
    hospital: 'Higher risk, especially in busy Nigerian wards',
    homeWins: true,
  },
  {
    factor: 'Family Involvement',
    home: 'Family can be present, learn care techniques, and stay updated',
    hospital: 'Limited visiting hours; family often left out of care decisions',
    homeWins: true,
  },
  {
    factor: 'Cost (Long-Term)',
    home: 'More cost-effective for ongoing chronic care and post-discharge recovery',
    hospital: 'Daily bed/ward fees accumulate rapidly — ₦25,000+ per day in many Nigerian hospitals',
    homeWins: true,
  },
  {
    factor: 'Travel & Stress',
    home: 'Zero travel — nurse comes to you, especially valuable for bedridden patients',
    hospital: 'Stressful patient transport, especially in Lagos/Abuja traffic',
    homeWins: true,
  },
  {
    factor: 'Personalised Attention',
    home: '1:1 dedicated nurse for your family member throughout the shift',
    hospital: 'One nurse typically covering 6–12 patients simultaneously',
    homeWins: true,
  },
];

export function WhyHomeCare({ onOpenBooking }: WhyHomeProps) {
  return (
    <section className="section-py" style={{ background: 'var(--surface)', borderTop: '1px solid var(--lilac-border)' }}>
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Why Home Care?</div>
          <h2 className="section-title">Home Nursing vs. Hospital Stay</h2>
          <p className="section-subtitle">
            For post-discharge recovery, chronic disease management, and elderly care — 
            professional home nursing is often the smarter, safer, and more comfortable choice.
          </p>
        </div>

        {/* Image strip */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
            <img src="/images/nurse-home-visit.jpg" alt="Home nursing care in a Nigerian home" style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }} loading="lazy" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(59,10,69,0.7), transparent)', display: 'flex', alignItems: 'flex-end', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.15rem' }}>
                <Home size={20} /> Home Nursing Care
              </div>
            </div>
          </div>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', background: 'var(--primary-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
              <Building2 size={56} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
              <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.15rem', opacity: 0.5 }}>Hospital Ward Admission</div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div style={{ background: 'white', border: '1.5px solid var(--lilac-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--primary)', color: 'white', padding: '1rem 1.5rem', fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.9rem' }}>
            <span>Factor</span>
            <span style={{ color: '#d8b4fe' }}>🏠 Home Nursing (TheSanitasNurse)</span>
            <span style={{ opacity: 0.65 }}>🏥 Hospital Ward</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1.1rem 1.5rem', borderBottom: i < rows.length - 1 ? '1px solid var(--lilac-border)' : 'none', background: i % 2 === 0 ? 'white' : 'var(--surface)', gap: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-dark)' }}>{r.factor}</span>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <CheckCircle size={15} color="#059669" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.5' }}>{r.home}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <X size={15} color="#dc2626" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{r.hospital}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary btn-lg" onClick={onOpenBooking}>
            Book Home Nursing Care Today
          </button>
        </div>
      </div>
    </section>
  );
}

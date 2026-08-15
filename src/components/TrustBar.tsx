/**
 * TrustBar — Stats strip below hero for single nurse brand
 */
export function TrustBar() {
  const stats = [
    { value: '500+', label: 'Private Home Visits Completed' },
    { value: 'RN / RM', label: 'NMCN Licensed Nurse & Midwife' },
    { value: '8+ Years', label: 'Clinical Hospital & Home Experience' },
    { value: '1-on-1', label: 'Guaranteed Dedicated Care Continuity' },
    { value: '24/7', label: 'Direct Family WhatsApp & Emergency Line' },
  ];

  return (
    <div style={{ background: 'var(--primary)', color: 'white', padding: '1.1rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 0.75rem' }}>
              <div style={{ fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 800, color: '#e0b8ff' }}>{s.value}</div>
              <div style={{ fontSize: '0.76rem', opacity: 0.75, marginTop: '0.1rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

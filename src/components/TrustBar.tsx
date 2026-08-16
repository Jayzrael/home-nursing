/**
 * TrustBar — Stats strip below hero for single nurse brand
 */
export function TrustBar() {
  const stats = [
    { value: '500+', label: 'Private Home Visits Completed' },
    { value: 'RN / RM', label: 'NMCN Licensed Nurse & Midwife' },
    { value: '8+ Years', label: 'Clinical Hospital & Home Experience' },
    { value: '1-on-1', label: 'Guaranteed Dedicated Care Continuity' },
    { value: '24/7', label: 'Direct Family WhatsApp Line' },
  ];

  return (
    <section className="trust-bar-section">
      <div className="container">
        <div className="trust-bar-grid">
          {stats.map((s, i) => (
            <div key={i} className="trust-bar-item">
              <div className="trust-bar-val">{s.value}</div>
              <div className="trust-bar-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

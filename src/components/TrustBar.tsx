export function TrustBar() {
  const stats = [
    { value: 'RN, RM', label: 'Dual Certified Nurse & Midwife' },
    { value: 'BLS & BNSc', label: 'Basic Life Support & Nursing Science' },
    { value: 'Since 2020', label: 'Clinical Training & Healthcare Exposure' },
    { value: '1-on-1', label: 'Personalized Care Continuity (Zero Strangers)' },
    { value: '24/7', label: 'Direct WhatsApp Line & Rapid Triage' },
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

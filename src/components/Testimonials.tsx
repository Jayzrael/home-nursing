import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mrs. Folake Adeyemi',
    area: 'Lekki Phase 1, Lagos',
    rating: 5,
    quote: "My father had a stroke and we were struggling to manage his care at home. The nurse from TheSanitasNurse was a lifesaver — professional, caring, and patient. She taught us everything and gave us peace of mind while we're at work.",
    service: 'Stroke Recovery & Bedridden Care',
  },
  {
    name: 'Dr. Emeka Obi',
    area: 'Wuse II, Abuja',
    rating: 5,
    quote: 'My mother had a knee replacement and needed wound dressing every two days. TheSanitasNurse sent a nurse within hours of me calling. The dressing was done perfectly and the wound healed with zero infection. Highly recommend.',
    service: 'Post-Surgical Wound Care',
  },
  {
    name: 'Mrs. Kemi Balogun',
    area: 'GRA, Ikeja Lagos',
    rating: 5,
    quote: "I had a C-section and didn't know how to properly clean the incision. Nurse Chiamaka visited daily for 2 weeks. She also helped me with breastfeeding and checked my baby's weight. Honestly better than going back to the hospital.",
    service: 'Postnatal & C-Section Recovery',
  },
  {
    name: 'Mr. Chukwudi Nwaneri',
    area: 'GRA Port Harcourt',
    rating: 5,
    quote: 'We are in the UK and our mother is in Port Harcourt with advanced diabetes. TheSanitasNurse visits her three times a week, manages her dressings, and sends us WhatsApp updates with photos. It gives the whole family peace.',
    service: 'Diabetic Care (Remote Family Arrangement)',
  },
  {
    name: 'Mrs. Toyin Akintola',
    area: 'Surulere, Lagos',
    rating: 5,
    quote: 'My husband had a bedsore after his long hospital admission. Within a week of regular dressing and repositioning by the TheSanitasNurse nurse, the wound started healing. The nurse was knowledgeable, clean, and always on time.',
    service: 'Pressure Ulcer & Bedridden Care',
  },
  {
    name: 'Mrs. Aisha Musa',
    area: 'Maitama, Abuja',
    rating: 5,
    quote: "My 82-year-old mother-in-law needed daily monitoring and medication after her hospital discharge. The nurse arrives by 7:30am every morning, does her checks, administers her drugs, and leaves a full report. It's been 3 months now and I cannot imagine life without this service.",
    service: 'Elderly Daily Nursing Care',
  },
];

export function Testimonials() {
  return (
    <section className="section-py" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Family Stories</div>
          <h2 className="section-title">What Nigerian Families Say About Us</h2>
          <p className="section-subtitle">
            Real families across Lagos, Abuja and Port Harcourt share their experience with 
            TheSanitasNurse.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: 'var(--surface)', border: '1.5px solid var(--lilac-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
              {/* Quote icon */}
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--lilac-border)' }}>
                <Quote size={32} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p style={{ fontSize: '0.93rem', color: 'var(--text-body)', lineHeight: '1.65', marginBottom: '1.5rem', flex: 1, fontStyle: 'italic' }}>
                "{t.quote}"
              </p>

              <div style={{ borderTop: '1px solid var(--lilac-border)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{t.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--purple)', fontWeight: 600, marginBottom: '0.2rem' }}>{t.area}</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', background: 'var(--lilac)', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-pill)', display: 'inline-block', border: '1px solid var(--lilac-border)' }}>
                  {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Mrs. Folake Adeyemi',
    area: 'Old Bodija, Ibadan',
    rating: 5,
    quote: "My father had a stroke and we were struggling to manage his care at home in Bodija. Nurse Adaeze was a lifesaver — professional, caring, and patient. She taught us how to position him properly and gave us complete peace of mind while we're at work.",
    service: 'Stroke Recovery & Bedridden Care',
  },
  {
    name: 'Dr. Kunle Alabi',
    area: 'Jericho GRA, Ibadan',
    rating: 5,
    quote: 'My mother had a knee replacement and needed sterile wound dressing every two days in Jericho. Nurse Adaeze arrived on time, was extremely gentle, and the surgical incision healed without a single infection. Highly recommended in Ibadan.',
    service: 'Post-Surgical Wound Care',
  },
  {
    name: 'Mrs. Kemi Balogun',
    area: 'Oluyole Estate, Ibadan',
    rating: 5,
    quote: "I had a C-section and didn't know how to properly clean the wound or manage newborn latch. Nurse Adaeze visited our home in Oluyole regularly for 2 weeks. She helped me recover quickly and checked my baby's weight and jaundice.",
    service: 'Postnatal & C-Section Recovery',
  },
  {
    name: 'Mr. Chukwudi Nwaneri',
    area: 'London, UK (Mother in Akobo, Ibadan)',
    rating: 5,
    quote: 'We live in the UK and my mother has advanced diabetes in Akobo, Ibadan. Nurse Adaeze visits her three times a week, monitors her blood sugar, manages her foot care, and sends us WhatsApp updates with photos. It gives our whole family peace of mind.',
    service: 'Diabetic Care (Diaspora Family)',
  },
  {
    name: 'Mrs. Toyin Akintola',
    area: 'Ring Road / Iyaganku, Ibadan',
    rating: 5,
    quote: 'My husband was discharged after a hospital stay and was developing a pressure sore. Within two weeks of regular sterile dressing, turning, and skin care by Nurse Adaeze, the skin fully healed. Clean, knowledgeable, and always on time.',
    service: 'Pressure Ulcer & Bedridden Care',
  },
  {
    name: 'Mrs. Aisha Bello',
    area: 'Agodi GRA, Ibadan',
    rating: 5,
    quote: "My 84-year-old mother needed daily vital sign monitoring and medication after her hospital discharge in Ibadan. Nurse Adaeze arrives on time every visit, does thorough checks, administers drugs, and leaves a clear report.",
    service: 'Elderly Daily Nursing Care',
  },
];

export function Testimonials() {
  return (
    <section className="section-py testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Family Stories</div>
          <h2 className="section-title">What Ibadan Families Say</h2>
          <p className="section-subtitle">
            Real feedback from families across Ibadan and the diaspora who trust 
            TheSanitasNurse for their loved ones' in-home clinical care.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-quote-icon">
                <Quote size={32} />
              </div>

              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="testimonial-quote-text">
                "{t.quote}"
              </p>

              <div className="testimonial-footer">
                <div className="testimonial-author-name">{t.name}</div>
                <div className="testimonial-author-area">{t.area}</div>
                <div className="testimonial-service-tag">
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

import { ArrowRight, Phone } from 'lucide-react';
import { THESANITAS_NURSE_INFO } from '../data/nursingData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

const steps = [
  {
    number: '01',
    title: 'Book Online or Call Me Directly',
    desc: 'Fill out the 2-minute booking form, call 0708 685 6431, or send a WhatsApp message describing your family\'s care needs.',
    img: '/images/nurse-child-care.jpg',
    imgAlt: 'Direct consultation with Nurse Adaeze',
  },
  {
    number: '02',
    title: 'Care Plan & Intake Review',
    desc: 'I personally review the medical history, diagnoses, and current prescriptions to tailor a custom home care routine for your patient.',
    img: '/images/nurse-injection.jpg',
    imgAlt: 'Nurse Adaeze preparing medications and care plan',
  },
  {
    number: '03',
    title: 'Dedicated Bedside Nursing Care',
    desc: 'I arrive directly at your home at the agreed time to provide 1-on-1 clinical care, wound dressing, vital signs checks, and hygiene support.',
    img: '/images/nurse-bp-check.jpg',
    imgAlt: 'Nurse Adaeze providing home care to elderly patient',
  },
  {
    number: '04',
    title: 'Direct WhatsApp Updates to Family',
    desc: 'After every shift, I send a clear clinical summary, vital signs logs, and progress notes directly to you, keeping you informed wherever you are.',
    img: '/images/nurse-home-visit.jpg',
    imgAlt: 'Nurse Adaeze communicating care progress with family',
  },
];

export function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  return (
    <section className="section-py how-it-works-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Simple, Transparent Process</div>
          <h2 className="section-title">How My Private Practice Works</h2>
          <p className="section-subtitle">
            Booking professional, personalized home nursing for your family is straightforward. 
            Direct communication, no agency middlemen, and 100% nurse continuity.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((s, i) => (
            <div key={i} className="how-step-card">
              <div className="how-step-img-wrap">
                <img src={s.img} alt={s.imgAlt} className="how-step-img" loading="lazy" />
                <div className="how-step-num">
                  {s.number}
                </div>
              </div>
              <div className="how-step-body">
                <h3 className="how-step-title">{s.title}</h3>
                <p className="how-step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visit duration options */}
        <div className="plans-box">
          <h3 className="plans-box-title">
            Flexible Private Care Plans
          </h3>
          <div className="plans-grid">
            {[
              { title: 'Single Clinical Visit', desc: 'One-off home visit for sterile wound dressing, injection administration, or comprehensive vital assessment.', price: 'From ₦15,000 / visit' },
              { title: 'Weekly Care Schedule', desc: 'Recurring scheduled visits (e.g. 3x weekly) for chronic condition management, elderly check-ups, and maternal care.', price: 'From ₦35,000 / week' },
              { title: 'Dedicated Shift Nursing', desc: 'Dedicated half-day or 12-hour overnight clinical blocks for bedridden, post-operative, or stroke recovery patients.', price: 'From ₦80,000 / shift' },
            ].map((opt, i) => (
              <div key={i} className="plan-card">
                <div className="plan-card-title">{opt.title}</div>
                <p className="plan-card-desc">{opt.desc}</p>
                <div className="plan-card-price">{opt.price}</div>
              </div>
            ))}
          </div>
          <p className="plans-note">
            * Transparent Naira pricing. Payments accepted via direct bank transfer, debit card, or USSD.
          </p>
        </div>

        <div className="how-actions">
          <button className="btn btn-primary btn-lg" onClick={onOpenBooking}>
            Book a Home Visit <ArrowRight size={17} />
          </button>
          <a
            href={`https://wa.me/${THESANITAS_NURSE_INFO.whatsappNumber}?text=${encodeURIComponent(THESANITAS_NURSE_INFO.whatsappPrefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
          >
            <Phone size={17} /> Speak with Nurse Adaeze
          </a>
        </div>
      </div>
    </section>
  );
}

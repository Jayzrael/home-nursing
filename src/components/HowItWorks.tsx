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
    <section className="section-py" style={{ background: 'var(--surface)', borderTop: '1px solid var(--lilac-border)' }}>
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Simple, Transparent Process</div>
          <h2 className="section-title">How My Private Practice Works</h2>
          <p className="section-subtitle">
            Booking professional, personalized home nursing for your family is straightforward. 
            Direct communication, no agency middlemen, and 100% nurse continuity.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.75rem', marginBottom: '3rem' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '3px solid white', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
                <img src={s.img} alt={s.imgAlt} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} loading="lazy" />
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'var(--purple)', color: 'white', fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 900, width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.number}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visit duration options */}
        <div style={{ background: 'white', border: '1.5px solid var(--lilac-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontFamily: 'Outfit', fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '1.25rem', textAlign: 'center' }}>
            Flexible Private Care Plans
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { title: 'Single Clinical Visit', desc: 'One-off home visit for sterile wound dressing, injection administration, or comprehensive vital assessment.', price: 'From ₦15,000 / visit' },
              { title: 'Weekly Care Schedule', desc: 'Recurring scheduled visits (e.g. 3x weekly) for chronic condition management, elderly check-ups, and maternal care.', price: 'From ₦35,000 / week' },
              { title: 'Dedicated Shift Nursing', desc: 'Dedicated half-day or 12-hour overnight clinical blocks for bedridden, post-operative, or stroke recovery patients.', price: 'From ₦80,000 / shift' },
            ].map((opt, i) => (
              <div key={i} style={{ background: 'var(--lilac)', border: '1px solid var(--lilac-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{opt.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.55', marginBottom: '0.75rem' }}>{opt.desc}</p>
                <div style={{ fontFamily: 'Outfit', fontSize: '1.05rem', fontWeight: 800, color: 'var(--purple)' }}>{opt.price}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
            * Transparent Naira pricing. Payments accepted via direct bank transfer, debit card, or USSD.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary btn-lg" onClick={onOpenBooking}>
            Book a Home Visit <ArrowRight size={17} />
          </button>
          <a
            href={`https://wa.me/${THESANITAS_NURSE_INFO.whatsappNumber}?text=${encodeURIComponent(THESANITAS_NURSE_INFO.whatsappPrefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Phone size={17} /> Speak with Nurse Adaeze
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'How do I book a private home nursing visit or online consultation?',
    a: 'You can use the 4-step online booking form on this site, call 0706 395 8561, or send a direct WhatsApp message to wa.me/2347063958561. Nurse Adeyemi will confirm scheduling details and tailor an individualized care plan.',
  },
  {
    q: 'What are your professional nursing qualifications?',
    a: 'Nurse Adeyemi Damilola Mary is a certified Registered Nurse (RN), Registered Midwife (RM), certified in Basic Life Support (BLS), and holds a Bachelor of Nursing Science (BNSc) with comprehensive clinical exposure since 2020 across pediatric, medical-surgical, emergency, and psychiatric nursing.',
  },
  {
    q: 'What 7 core services does DhermHealthConnect offer?',
    a: 'We specialize in: 1) Online nursing consultation, 2) Health education & lifestyle coaching, 3) Blood pressure & diabetes monitoring, 4) Wound care guidance & dressing, 5) Medication education & compliance, 6) Antenatal and postnatal support, and 7) In-home clinical nursing visits.',
  },
  {
    q: 'Will Nurse Adeyemi personally attend every visit?',
    a: 'Yes, absolutely. DhermHealthConnect provides guaranteed 1-on-1 care continuity. You work directly with Nurse Adeyemi Damilola Mary every visit, ensuring consistent medical oversight and zero rotation of unfamiliar temp nurses.',
  },
  {
    q: 'Can I book an online nursing consultation if I am in another state or abroad?',
    a: 'Yes! Our virtual online nursing consultations are available nationwide and globally for symptom reviews, medication coaching, recovery check-ins, and maternal/postnatal guidance via secure video or phone.',
  },
  {
    q: 'What payment options are available?',
    a: 'We support flexible payment options: secure debit/credit card payments (Paystack / Flutterwave integration ready), direct bank transfer, or payment on visit. Full digital receipts and care documentation are provided.',
  },
  {
    q: 'How are patient records and health privacy protected?',
    a: 'All clinical assessments, vitals logs, and diagnostic details are treated with strict clinical confidentiality in compliance with nursing ethical codes and healthcare data protection standards.',
  },
  {
    q: 'Can family members receive regular WhatsApp health updates?',
    a: 'Yes — after every home visit or consultation, a structured clinical summary is shared directly with the designated family contact, including vital sign readings, observations, and care recommendations.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py" style={{ background: 'var(--white)' }}>
      <div className="container">
        
        <div className="section-header-center">
          <div className="section-badge">
            <Sparkles size={14} className="gold-accent-icon" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">Common Questions About Our Care</h2>
          <p className="section-subtitle">
            Everything you need to know about booking, services, nurse credentials, and care continuity with DhermHealthConnect.
          </p>
        </div>

        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: open === i ? 'var(--lilac)' : 'var(--surface)',
                border: `1.5px solid ${open === i ? 'var(--primary)' : 'var(--lilac-border)'}`,
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.15rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '1rem',
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.97rem', color: open === i ? 'var(--primary-mid)' : 'var(--text-dark)', lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span style={{ color: 'var(--primary)', flexShrink: 0 }}>
                  {open === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 1.5rem 1.25rem', fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: '1.7' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

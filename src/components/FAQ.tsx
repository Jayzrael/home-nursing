import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'How do I book a private home nursing visit?',
    a: 'You can fill out the online booking form on this site, call 0708 685 6431, or send a direct WhatsApp message. I will discuss your family member\'s condition, confirm scheduling availability, and prepare an individualized care plan.',
  },
  {
    q: 'What are your professional nursing qualifications?',
    a: 'I am a dual-certified Registered Nurse (RN) and Registered Midwife (RM), fully licensed and registered with the Nursing and Midwifery Council of Nigeria (NMCN Lic. NMCN/RN/0087432). I bring over 8 years of hospital-based and private in-home clinical nursing experience.',
  },
  {
    q: 'Will you personally attend every visit?',
    a: 'Yes, absolutely. TheSanitasNurse is my dedicated private nursing practice. You will always work directly with me — ensuring complete familiarity with your patient\'s medical history, strict care continuity, and zero agency stranger rotation.',
  },
  {
    q: 'How much does private home nursing cost?',
    a: 'Transparent pricing starts from ₦15,000 for a single clinical visit (e.g. sterile wound dressing, injection, or vital assessment), from ₦35,000/week for recurring scheduled routines (e.g. 3x weekly elderly checks), and from ₦80,000/shift for dedicated 12-hour bedside nursing.',
  },
  {
    q: 'Do you offer emergency or same-day visits?',
    a: 'Yes. For acute or urgent needs (e.g. post-hospital discharge wound breakdown, sudden high blood pressure, or urgent catheter care), call 0708 685 6431 or WhatsApp directly and I will accommodate a same-day visit depending on current location and schedule.',
  },
  {
    q: 'What locations in Ibadan do you cover?',
    a: 'I cover all major areas across Ibadan, Oyo State — including Old & New Bodija, Agodi GRA, Ikolaba, Samonda, UI/UCH axis, Oluyole Estate, Ring Road, Iyaganku GRA, Alalubosa GRA, Jericho GRA, Akobo, and surrounding neighborhoods.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Payments are accepted via direct bank transfer, debit/credit card through secure Paystack links, or USSD. Official clinical invoices and electronic receipts are issued for every payment.',
  },
  {
    q: 'Is my loved one\'s medical information kept confidential?',
    a: 'Yes, completely. All patient medical records, intake notes, vital trends, and diagnostic details are treated with strict clinical confidentiality in compliance with NMCN ethical codes of conduct and Nigerian privacy regulations.',
  },
  {
    q: 'Can I receive care updates while living abroad or at work?',
    a: 'Yes — this is a cornerstone of my practice. After every home visit, I send a structured WhatsApp summary directly to the designated family contact, including vital sign readings, photographs of wound healing progress (if applicable), and practical observations.',
  },
  {
    q: 'What if I need to reschedule a scheduled visit?',
    a: 'Simply let me know at least 4 hours before the scheduled arrival time via call or WhatsApp, and we can easily adjust the visit time to suit your family\'s convenience at no additional charge.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-py" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Frequently Asked Questions</div>
          <h2 className="section-title">Questions Families Ask Me</h2>
          <p className="section-subtitle">
            Clear, straightforward answers about my private home nursing practice, scheduling, and care routines.
          </p>
        </div>

        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: open === i ? 'var(--lilac)' : 'var(--surface)',
                border: `1.5px solid ${open === i ? 'var(--purple)' : 'var(--lilac-border)'}`,
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
                <span style={{ color: 'var(--purple)', flexShrink: 0 }}>
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

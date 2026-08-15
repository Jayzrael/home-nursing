import { Globe, CreditCard, MessageSquare, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { THESANITAS_NURSE_INFO } from '../data/nursingData';

interface DiasporaCareProps {
  onOpenBooking: () => void;
}

export function DiasporaCare({ onOpenBooking }: DiasporaCareProps) {
  const benefits = [
    {
      icon: <CreditCard size={22} />,
      title: 'Pay Remotely & Securely',
      desc: 'Pay in USD, GBP, EUR or NGN via international debit/credit cards or direct bank transfer from abroad with full electronic receipts.'
    },
    {
      icon: <MessageSquare size={22} />,
      title: 'Direct WhatsApp Reports',
      desc: 'Receive post-visit summaries, vital sign trends (BP, blood sugar), medication updates, and photos directly from Nurse Adaeze after each shift.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Licensed Clinical Accountability',
      desc: 'Dual NMCN certified (RN/RM), 8+ years hospital experience, with strict clinical standards and direct emergency physician escalation pathways.'
    },
    {
      icon: <HeartHandshake size={22} />,
      title: '100% Care Continuity',
      desc: 'Your parents always see the same trusted, caring nurse — fostering familiarity, emotional comfort, and consistent medical oversight.'
    }
  ];

  return (
    <section className="section-py" style={{ background: 'linear-gradient(135deg, #2b0833 0%, #3e0b4a 50%, #5b1889 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.12)', color: '#f0d9ff', fontSize: '0.82rem', fontWeight: 700, padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Globe size={14} /> Diaspora Care Desk
            </div>
            
            <h2 style={{ fontFamily: 'Outfit', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Caring for Your Parents from Abroad? <br />
              <span style={{ color: '#d8b4fe' }}>Book & Manage Care Remotely.</span>
            </h2>

            <p style={{ fontSize: '1.02rem', opacity: 0.9, lineHeight: '1.7', marginBottom: '2rem' }}>
              Living in the UK, US, Canada, Europe, or the Middle East? You no longer have to worry endlessly about your aging parents' medical care in Nigeria. I act as your personal, trusted healthcare eyes and hands on the ground.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ color: '#d8b4fe', marginBottom: '0.5rem' }}>{b.icon}</div>
                  <h4 style={{ fontFamily: 'Outfit', fontSize: '0.98rem', fontWeight: 700, marginBottom: '0.35rem' }}>{b.title}</h4>
                  <p style={{ fontSize: '0.82rem', opacity: 0.8, lineHeight: '1.5' }}>{b.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-white btn-lg" onClick={onOpenBooking}>
                Book Care for Parents
              </button>
              <a
                href={`https://wa.me/${THESANITAS_NURSE_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Nurse Adaeze! I am living abroad and would like to arrange private home nursing care for my parents in Nigeria.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <PhoneCall size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column (Visual) */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '4px solid rgba(255,255,255,0.15)', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="/images/nurse-child-care.jpg"
                alt="Nurse Adaeze providing compassionate home care"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>

            {/* Diaspora badge card */}
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: '#ffffff', color: 'var(--text-dark)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.85rem', border: '1px solid var(--lilac-border)' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#ecfdf5', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>100% Peace of Mind</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Direct, continuous private nurse updates</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

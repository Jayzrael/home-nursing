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
      desc: 'Receive post-visit summaries, vital sign trends (BP, blood sugar), medication updates, and photos directly from Nurse Adaeze after each shift in Ibadan.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Licensed Clinical Accountability',
      desc: 'Dual NMCN certified (RN/RM), 8+ years hospital experience, with strict clinical standards and direct emergency physician escalation pathways in Ibadan.'
    },
    {
      icon: <HeartHandshake size={22} />,
      title: '100% Care Continuity',
      desc: 'Your parents always see the same trusted, caring nurse — fostering familiarity, emotional comfort, and consistent medical oversight.'
    }
  ];

  return (
    <section className="section-py diaspora-section">
      <div className="container">
        <div className="diaspora-grid">
          
          {/* Left Column */}
          <div className="diaspora-content-col">
            <div className="diaspora-badge">
              <Globe size={14} /> Diaspora Care Desk
            </div>
            
            <h2 className="diaspora-title">
              Caring for Your Parents in Ibadan from Abroad? <br />
              <span className="highlight-text">Book & Manage Care Remotely.</span>
            </h2>

            <p className="diaspora-lead">
              Living in the UK, US, Canada, Europe, or the Middle East? You no longer have to worry endlessly about your aging parents' medical care in Ibadan. I act as your personal, trusted healthcare eyes and hands on the ground in Oyo State.
            </p>

            <div className="diaspora-benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} className="diaspora-benefit-card">
                  <div className="diaspora-benefit-icon">{b.icon}</div>
                  <h4 className="diaspora-benefit-title">{b.title}</h4>
                  <p className="diaspora-benefit-desc">{b.desc}</p>
                </div>
              ))}
            </div>

            <div className="diaspora-actions">
              <button className="btn btn-white btn-lg" onClick={onOpenBooking}>
                Book Care for Parents in Ibadan
              </button>
              <a
                href={`https://wa.me/${THESANITAS_NURSE_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Nurse Adaeze! I am living abroad and would like to arrange private home nursing care for my parents in Ibadan.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg diaspora-whatsapp-btn"
              >
                <PhoneCall size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column (Visual) */}
          <div className="diaspora-visual-col">
            <div className="diaspora-img-frame">
              <img
                src="/images/nurse-child-care.jpg"
                alt="Nurse Adaeze providing compassionate home care in Ibadan"
                className="diaspora-img"
                loading="lazy"
              />
            </div>

            {/* Diaspora badge card */}
            <div className="diaspora-floating-card">
              <div className="diaspora-fc-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="diaspora-fc-title">100% Peace of Mind in Ibadan</div>
                <div className="diaspora-fc-sub">Direct, continuous private nurse updates</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

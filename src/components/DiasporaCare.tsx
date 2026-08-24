import { Globe, CreditCard, MessageSquare, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

interface DiasporaCareProps {
  onOpenBooking: () => void;
}

export function DiasporaCare({ onOpenBooking }: DiasporaCareProps) {
  const benefits = [
    {
      icon: <CreditCard size={22} />,
      title: 'Pay Remotely & Securely',
      desc: 'Seamless payments via debit/credit cards or direct bank transfer from abroad with detailed electronic invoices and receipts.'
    },
    {
      icon: <MessageSquare size={22} />,
      title: 'Direct WhatsApp Reports',
      desc: 'Receive post-visit clinical summaries, vital sign trends (BP, glucose), medication adherence logs, and recovery notes directly from Nurse Adeyemi.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Licensed Professional Rigor',
      desc: 'Dual certified RN & RM with BLS and BNSc, applying top clinical safety protocols and proactive physician collaboration.'
    },
    {
      icon: <HeartHandshake size={22} />,
      title: 'Guaranteed 1:1 Care Continuity',
      desc: 'Your loved ones always see the same trusted, caring nurse — fostering personal familiarity and clinical consistency.'
    }
  ];

  return (
    <section className="section-py diaspora-section">
      <div className="container">
        <div className="diaspora-grid">
          
          {/* Left Column */}
          <div className="diaspora-content-col">
            <div className="diaspora-badge">
              <Globe size={14} /> Diaspora & Remote Family Support
            </div>
            
            <h2 className="diaspora-title">
              Caring for Your Loved Ones from Abroad? <br />
              <span className="highlight-text">Book & Monitor Care Seamlessly.</span>
            </h2>

            <p className="diaspora-lead">
              Living in the UK, US, Canada, Europe, or other states? You no longer have to worry about aging parents or recovering relatives managing their healthcare alone. <strong>DhermHealthConnect</strong> acts as your dedicated, licensed nursing advocate on the ground.
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
              <button className="btn btn-gold btn-lg" onClick={onOpenBooking}>
                Book Care for Family
              </button>
              <a
                href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Nurse Adeyemi Damilola Mary! I am inquiring from abroad about arranging home nursing care for a family member.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg diaspora-whatsapp-btn"
              >
                <PhoneCall size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column (Vector Graphic Frame) */}
          <div className="diaspora-visual-col">
            <div className="diaspora-vector-frame">
              <svg viewBox="0 0 360 320" className="diaspora-svg" aria-label="Vector illustration of remote family care coordination">
                <rect x="10" y="10" width="340" height="300" rx="24" fill="#03522B" stroke="#D4AF37" strokeWidth="2" />
                
                {/* Globe & Connection Lines */}
                <circle cx="180" cy="140" r="70" fill="#046A38" stroke="#D4AF37" strokeWidth="1.5" />
                <ellipse cx="180" cy="140" rx="70" ry="25" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3,3" opacity="0.7" />
                <line x1="180" y1="70" x2="180" y2="210" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3,3" opacity="0.7" />
                
                {/* Location Pulse Points */}
                <circle cx="140" cy="120" r="6" fill="#F5D77F" className="pulse-dot-glow" />
                <circle cx="210" cy="155" r="6" fill="#F5D77F" className="pulse-dot-glow" />
                <path d="M140 120 Q175 100 210 155" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4,2" />

                {/* Badge Container */}
                <g transform="translate(60, 235)">
                  <rect x="0" y="0" width="240" height="48" rx="12" fill="#FFFFFF" />
                  <text x="120" y="22" textAnchor="middle" fill="#046A38" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Global Coordination</text>
                  <text x="120" y="38" textAnchor="middle" fill="#5C7A6D" fontSize="10" fontFamily="sans-serif">Direct WhatsApp Updates & Receipts</text>
                </g>
              </svg>
            </div>

            {/* Diaspora badge card */}
            <div className="diaspora-floating-card">
              <div className="diaspora-fc-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="diaspora-fc-title">100% Peace of Mind</div>
                <div className="diaspora-fc-sub">Licensed nursing updates after every visit</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

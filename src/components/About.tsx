import { ShieldCheck, Award, Heart, Clock, Phone, Calendar } from 'lucide-react';
import { THESANITAS_NURSE_INFO } from '../data/nursingData';

interface AboutProps {
  onOpenBooking?: () => void;
}

const pillars = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Dual NMCN Certified',
    desc: 'Fully registered with the Nursing and Midwifery Council of Nigeria as both a Registered Nurse (RN) and Registered Midwife (RM).',
  },
  {
    icon: <Award size={22} />,
    title: 'Hospital-Grade Standards',
    desc: 'Sterile dressing techniques, clinical documentation, and precise vital signs monitoring that meet top teaching hospital benchmarks.',
  },
  {
    icon: <Heart size={22} />,
    title: '100% Care Continuity',
    desc: 'You work directly with me every visit. No agency intermediaries, no rotating strangers, and complete familiarity with your patient\'s needs.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Direct Family Communication',
    desc: 'Immediate WhatsApp reports after each shift with vital trends, observations, and direct updates for family members in Ibadan, across Nigeria, or abroad.',
  },
];

export function About({ onOpenBooking }: AboutProps) {
  return (
    <section id="about" className="section-py about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Image */}
          <div className="about-img-wrap">
            <img
              src="/images/nurse-home-visit.jpg"
              alt="Nurse Adaeze (TheSanitasNurse) providing home nursing in Ibadan"
              loading="lazy"
            />
          </div>

          {/* Right: Copy */}
          <div className="about-content-col">
            <div className="section-badge">About Your Nurse</div>
            <h2 className="section-title">
              Personalized, Licensed Clinical Care in Ibadan You Can Trust
            </h2>
            <p className="about-lead">
              Hello! I am <strong>Nurse Adaeze Okonkwo (RN, RM)</strong>, founder and lead clinical practitioner at <strong>TheSanitasNurse</strong>. Based in Ibadan, Oyo State, with over 8 years of hospital-based clinical nursing and private home practice, I provide specialized in-home medical care across Bodija, Oluyole, Jericho, Ring Road, Akobo, Iyaganku GRA, and surrounding neighborhoods.
            </p>
            <p className="about-body">
              Whether your elderly parent needs daily monitoring, your post-surgery wound requires sterile dressing, or you are recovering from a Caesarean delivery, I deliver hospital-grade nursing right in the safety and comfort of your home in Ibadan.
            </p>

            {/* 4 Pillars */}
            <div className="about-pillars-grid">
              {pillars.map((p, i) => (
                <div key={i} className="about-pillar-card">
                  <div className="about-pillar-icon">{p.icon}</div>
                  <div className="about-pillar-title">{p.title}</div>
                  <div className="about-pillar-desc">{p.desc}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="about-actions">
              {onOpenBooking && (
                <button className="btn btn-primary" onClick={onOpenBooking}>
                  <Calendar size={15} /> Book a Private Visit in Ibadan
                </button>
              )}
              <a
                href={`https://wa.me/${THESANITAS_NURSE_INFO.whatsappNumber}?text=${encodeURIComponent(THESANITAS_NURSE_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Phone size={15} /> Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

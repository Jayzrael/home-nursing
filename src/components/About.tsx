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
    desc: 'Sterile dressing techniques, clinical documentation, and precise vital signs monitoring that meet top Nigerian hospital benchmarks.',
  },
  {
    icon: <Heart size={22} />,
    title: '100% Care Continuity',
    desc: 'You work directly with me every visit. No agency intermediaries, no rotating strangers, and complete familiarity with your patient\'s needs.',
  },
  {
    icon: <Clock size={22} />,
    title: 'Direct Family Communication',
    desc: 'Immediate WhatsApp reports after each shift with vital trends, observations, and direct updates for family members in Nigeria or abroad.',
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
              alt="Nurse Adaeze (TheSanitasNurse) providing home nursing in Lagos"
              loading="lazy"
            />
          </div>

          {/* Right: Copy */}
          <div>
            <div className="section-badge">About Your Nurse</div>
            <h2 className="section-title">
              Personalized, Licensed Clinical Care You Can Trust
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '1.25rem', fontSize: '1.02rem' }}>
              Hello! I am <strong>Nurse Adaeze Okonkwo (RN, RM)</strong>, founder and lead clinical practitioner at <strong>TheSanitasNurse</strong>. With over 8 years of hospital-based clinical nursing and private home practice, I provide specialized in-home medical care across Lagos and Abuja.
            </p>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '2rem', fontSize: '1.02rem' }}>
              Whether your elderly parent needs daily monitoring, your post-surgery wound requires sterile dressing, or you are recovering from a Caesarean delivery, I deliver hospital-grade nursing right in the safety and comfort of your home.
            </p>

            {/* 4 Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              {pillars.map((p, i) => (
                <div key={i} style={{ background: 'var(--lilac)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--lilac-border)' }}>
                  <div style={{ color: 'var(--purple)', marginBottom: '0.5rem' }}>{p.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>{p.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{p.desc}</div>
                </div>
              ))}
            </div>

            {/* Actions & Accreditations */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {onOpenBooking && (
                <button className="btn btn-primary" onClick={onOpenBooking}>
                  <Calendar size={15} /> Book a Private Visit
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

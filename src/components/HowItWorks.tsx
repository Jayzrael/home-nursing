import { ArrowRight, Phone, Calendar, ClipboardCheck, Stethoscope, MessageSquare, Sparkles } from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

const steps = [
  {
    number: '01',
    title: 'Choose a Service & Schedule Online',
    desc: 'Select from our 7 core nursing care specialties, pick a convenient date & time slot, and submit your contact details in minutes.',
    icon: <Calendar size={28} />,
  },
  {
    number: '02',
    title: 'Clinical Assessment & Triage',
    desc: 'Nurse Emmanuel Damilola Mary reviews medical history, current prescriptions, and specific care goals to prepare a customized bedside plan.',
    icon: <ClipboardCheck size={28} />,
  },
  {
    number: '03',
    title: 'Professional In-Home Care or Virtual Visit',
    desc: 'Receive attentive, hospital-standard nursing — from aseptic wound dressing and vital signs monitoring to midwife maternal care.',
    icon: <Stethoscope size={28} />,
  },
  {
    number: '04',
    title: 'Continuous Family Reporting & Support',
    desc: 'Receive direct WhatsApp summaries, clinical vitals logs, and recovery progress notes to keep your entire family updated and reassured.',
    icon: <MessageSquare size={28} />,
  },
];

export function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  return (
    <section className="section-py how-it-works-section">
      <div className="container">

        <div className="section-header-center">
          <div className="section-badge">
            <Sparkles size={14} className="gold-accent-icon" />
            <span>Seamless Care Journey</span>
          </div>
          <h2 className="section-title">How DhermHealthConnect Works</h2>
          <p className="section-subtitle">
            Experience transparent, professional nursing from booking to ongoing health monitoring with guaranteed care continuity.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((s, i) => (
            <div key={i} className="how-step-card">
              <div className="how-step-icon-wrap">
                <div className="how-step-icon-circle">
                  {s.icon}
                </div>
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

        {/* Flexible Care Options */}
        <div className="plans-box">
          <h3 className="plans-box-title">
            Tailored Home Nursing Options
          </h3>
          <div className="plans-grid">
            {[
              { title: 'Online Nursing Consultation', desc: 'Virtual triage, recovery check-ins, lab result review discussions, and personalized home care guidance.', badge: 'Virtual Care' },
              { title: 'Single In-Home Clinical Visit', desc: 'Targeted in-home visit for sterile wound dressing, blood pressure & glucose checks, or injection administration.', badge: 'Targeted Visit' },
              { title: 'Scheduled Recurring & Shift Care', desc: 'Dedicated recurring weekly visits or structured morning, afternoon, and overnight nursing shifts for ongoing recovery.', badge: 'Dedicated Support' },
            ].map((opt, i) => (
              <div key={i} className="plan-card">
                <span className="plan-badge-pill">{opt.badge}</span>
                <div className="plan-card-title">{opt.title}</div>
                <p className="plan-card-desc">{opt.desc}</p>
              </div>
            ))}
          </div>
          <p className="plans-note">
            * Direct and transparent service scheduling. Secure online payment ready or payment on visit.
          </p>
        </div>

        <div className="how-actions">
          <button className="btn btn-primary btn-lg" onClick={onOpenBooking}>
            Book an Appointment <ArrowRight size={17} />
          </button>
          <a
            href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
          >
            <Phone size={17} /> Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

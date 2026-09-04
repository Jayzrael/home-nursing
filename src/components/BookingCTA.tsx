import { 
  Calendar, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

interface BookingCTAProps {
  onOpenBooking: () => void;
  onOpenIntake: () => void;
}

const bookingStepsExplainer = [
  { step: '01', title: 'Choose a Service', desc: 'Select from our 7 core nursing care specialties', icon: <Calendar size={20} /> },
  { step: '02', title: 'Select Date & Time', desc: 'Pick morning, afternoon, or dedicated overnight shifts', icon: <Clock size={20} /> },
  { step: '03', title: 'Fill in Details', desc: 'Provide patient information and care location', icon: <FileText size={20} /> },
  { step: '04', title: 'Receive Confirmation', desc: 'Instant WhatsApp summary and nurse auto-dispatch', icon: <CheckCircle2 size={20} /> },
];

export function BookingCTA({ onOpenBooking, onOpenIntake }: BookingCTAProps) {
  return (
    <section id="contact" className="booking-cta-section">
      <div className="container">
        
        {/* Explainer Sequence Banner (Section 10.D) */}
        <div className="booking-explainer-banner">
          <div className="explainer-header">
            <div className="section-badge badge-gold" style={{ background: 'rgba(212, 175, 55, 0.15)', color: '#F5D77F', border: '1px solid rgba(212, 175, 55, 0.4)' }}>
              <Sparkles size={13} /> How Booking Works
            </div>
            <h3 className="explainer-title">Simple 4-Step Online Scheduling</h3>
          </div>

          <div className="explainer-steps-grid">
            {bookingStepsExplainer.map((s, idx) => (
              <div key={idx} className="explainer-step-card">
                <div className="explainer-num">{s.step}</div>
                <div className="explainer-icon-circle">{s.icon}</div>
                <h4 className="explainer-step-heading">{s.title}</h4>
                <p className="explainer-step-sub">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA & Contact Grid */}
        <div className="booking-cta-grid" style={{ marginTop: '3rem' }}>
          {/* Left: Call to Action */}
          <div>
            <div className="section-badge badge-gold" style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.25)' }}>
              {DHERM_HEALTH_INFO.motto}
            </div>
            <h2 className="booking-cta-title">
              Ready to Experience
              <br />Professional Home Care?
            </h2>
            <p className="booking-cta-text">
              Schedule a personalized home visit or virtual consultation directly with <strong>{DHERM_HEALTH_INFO.nurseName}</strong> ({DHERM_HEALTH_INFO.nurseQualifications}). Professional, private, and personal care tailored to your family.
            </p>
            <p className="booking-cta-fee-line">
              <span className="cta-fee-badge">₦5,000 Consultation Fee</span> — transparent, no hidden charges.
            </p>
            
            <div className="booking-cta-actions">
              <button className="btn btn-gold btn-lg" onClick={onOpenBooking}>
                <Calendar size={18} /> Book an Appointment <ArrowRight size={16} />
              </button>
              <button
                className="btn btn-outline btn-lg"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#ffffff' }}
                onClick={onOpenIntake}
              >
                <FileText size={17} /> Patient Intake Form
              </button>
            </div>
          </div>

          {/* Right: Direct Contact Channels */}
          <div>
            <h3 style={{ color: '#ffffff', fontFamily: 'Outfit', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>
              Direct Contact & Support
            </h3>
            <div className="booking-cta-contacts">
              
              {/* Phone Line */}
              <a href={`tel:${DHERM_HEALTH_INFO.phones[0].link}`} className="contact-channel" style={{ textDecoration: 'none' }}>
                <div className="contact-channel-icon"><Phone size={18} /></div>
                <div>
                  <div className="contact-channel-label">Direct Phone Line</div>
                  <div className="contact-channel-value">{DHERM_HEALTH_INFO.phones[0].number}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${DHERM_HEALTH_INFO.email}`}
                className="contact-channel"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-channel-icon"><Mail size={18} /></div>
                <div>
                  <div className="contact-channel-label">Email Address</div>
                  <div className="contact-channel-value">{DHERM_HEALTH_INFO.email}</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel whatsapp-channel"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-channel-icon"><MessageSquare size={18} /></div>
                <div>
                  <div className="contact-channel-label">Direct WhatsApp Triage</div>
                  <div className="contact-channel-value">wa.me/{DHERM_HEALTH_INFO.whatsappNumber}</div>
                </div>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

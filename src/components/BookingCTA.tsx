import { Calendar, ExternalLink, Phone, Mail, MessageSquare } from 'lucide-react';
import { THESANITAS_NURSE_INFO } from '../data/nursingData';

interface BookingCTAProps {
  onOpenBooking: () => void;
  onOpenIntake: () => void;
}

export function BookingCTA({ onOpenBooking, onOpenIntake }: BookingCTAProps) {
  return (
    <section className="booking-cta-section">
      <div className="container">
        <div className="booking-cta-grid">
          {/* Left: Call to Action */}
          <div>
            <h2 className="booking-cta-title">
              Ready to Get Started?
              <br />Book Your Private Visit Today.
            </h2>
            <p className="booking-cta-text">
              Schedule a personalized home visit directly with Nurse Adaeze. Fill out the short booking 
              request or submit a patient intake form so I can review medical history and prepare your 
              custom care routine.
            </p>
            <div className="booking-cta-actions">
              <button className="btn btn-white btn-lg" onClick={onOpenBooking}>
                <Calendar size={18} /> Book a Home Visit
              </button>
              <button
                className="btn btn-outline btn-lg"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
                onClick={onOpenIntake}
              >
                Patient Intake Form
              </button>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.84rem', opacity: 0.7 }}>
              Prefer Google Forms?&nbsp;
              <a
                href={THESANITAS_NURSE_INFO.googleBookingFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
              >
                Open booking form directly <ExternalLink size={13} />
              </a>
            </p>
          </div>

          {/* Right: Contact Channels */}
          <div>
            <h3 style={{ color: 'white', fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', opacity: 0.9 }}>
              Direct Contact Lines
            </h3>
            <div className="booking-cta-contacts">
              {THESANITAS_NURSE_INFO.phones.map((p, i) => (
                <a key={i} href={`tel:${p.link}`} className="contact-channel" style={{ textDecoration: 'none' }}>
                  <div className="contact-channel-icon"><Phone size={18} /></div>
                  <div>
                    <div className="contact-channel-label">{p.label}</div>
                    <div className="contact-channel-value">{p.number}</div>
                  </div>
                </a>
              ))}
              <a
                href={`mailto:${THESANITAS_NURSE_INFO.email}`}
                className="contact-channel"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-channel-icon"><Mail size={18} /></div>
                <div>
                  <div className="contact-channel-label">Direct Email</div>
                  <div className="contact-channel-value">{THESANITAS_NURSE_INFO.email}</div>
                </div>
              </a>
              <a
                href={`https://wa.me/${THESANITAS_NURSE_INFO.whatsappNumber}?text=${encodeURIComponent(THESANITAS_NURSE_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-channel-icon"><MessageSquare size={18} /></div>
                <div>
                  <div className="contact-channel-label">Direct WhatsApp</div>
                  <div className="contact-channel-value">Chat directly with Nurse Adaeze</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { X } from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

interface LegalModalsProps {
  activeModal: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  if (!activeModal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-box-wide" onClick={e => e.stopPropagation()} style={{ maxHeight: '85vh' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>

        {activeModal === 'privacy' && (
          <div className="legal-content">
            <h2>Privacy Policy</h2>
            <p><em>Last updated: 2026</em></p>

            <h3>1. Who We Are</h3>
            <p>
              <strong>DhermHealthConnect</strong> is a licensed clinical home nursing and virtual health practice led by Nurse Emmanuel Damilola Mary (RN, RM, BLS, BNSc). We are committed to protecting the privacy, dignity, and confidentiality of our patients' health and personal information.
            </p>

            <h3>2. Information We Collect</h3>
            <p>We collect the following categories of information when you use our services or website:</p>
            <ul>
              <li><strong>Personal identification information:</strong> Name, date of birth, gender, residential care address, phone number, and email address.</li>
              <li><strong>Medical information:</strong> Health history, diagnoses, medications, allergies, and care requirements provided through patient intake forms or direct consultations.</li>
              <li><strong>Communication records:</strong> WhatsApp messages, phone call notes, and email correspondence.</li>
              <li><strong>Appointment and service records:</strong> Booking history, vital signs logs, and nursing care summaries.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>Your information is used solely for the purpose of delivering safe, appropriate nursing care to you or your patient:</p>
            <ul>
              <li>Structuring individualized bedside nursing plans</li>
              <li>Coordinating with consulting physicians where required</li>
              <li>Sending appointment confirmations and care updates to you</li>
              <li>Complying with healthcare confidentiality ethics and Nigerian healthcare standards</li>
            </ul>

            <h3>4. Information Sharing</h3>
            <p>
              We do <strong>not</strong> sell, rent, or share personal or medical information with third parties for commercial purposes. Information is only shared with authorized clinical care providers or emergency medical services when acute escalation is needed.
            </p>

            <h3>5. Contact</h3>
            <p>
              For privacy enquiries, please contact: <strong>{DHERM_HEALTH_INFO.email}</strong> or call <strong>{DHERM_HEALTH_INFO.phone}</strong>.
            </p>
          </div>
        )}

        {activeModal === 'terms' && (
          <div className="legal-content">
            <h2>Terms of Service</h2>
            <p><em>Last updated: 2026</em></p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By using the services of <strong>DhermHealthConnect</strong>, you agree to be bound by these Terms of Service.
            </p>

            <h3>2. Our Services</h3>
            <p>
              DhermHealthConnect provides professional registered nursing services, including online nursing consultations, health education, blood pressure & diabetes monitoring, wound care guidance, medication adherence coaching, antenatal & postnatal support, and in-home nursing visits.
            </p>

            <h3>3. Professional Standards</h3>
            <p>
              All clinical care is delivered by licensed Registered Nurses and Registered Midwives adhering strictly to professional healthcare ethics, infection control, and safety protocols.
            </p>

            <h3>4. Scope of Home Nursing Care</h3>
            <p>
              Home nursing care provided by DhermHealthConnect is designed for routine clinical oversight, rehabilitation, wound care, and maternal/chronic support. In case of acute medical emergencies requiring intensive hospital care, prompt referral and family notification will be initiated.
            </p>

            <h3>5. Contact</h3>
            <p>
              For questions about these terms: <strong>{DHERM_HEALTH_INFO.email}</strong> | <strong>{DHERM_HEALTH_INFO.phone}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

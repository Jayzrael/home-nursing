import { X } from 'lucide-react';

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
            <p><em>Last updated: August 2026</em></p>

            <h3>1. Who We Are</h3>
            <p>
              TheSanitasNurse is a clinical home care practice registered in Nigeria,
              with regional dispatch hubs in Lagos, Abuja, and Port Harcourt. We are committed to protecting the
              privacy and confidentiality of our patients' personal and medical information.
            </p>

            <h3>2. Information We Collect</h3>
            <p>We collect the following categories of information when you use our services or website:</p>
            <ul>
              <li><strong>Personal identification information:</strong> Name, date of birth, gender, residential address, phone number, and email address.</li>
              <li><strong>Medical information:</strong> Health history, diagnoses, medications, allergies, and care requirements provided through patient intake forms or direct engagement.</li>
              <li><strong>Contact and communication records:</strong> WhatsApp messages, phone call records, and email correspondence with our care team.</li>
              <li><strong>Appointment and service records:</strong> Booking history, nurse visit reports, and clinical documentation.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>Your information is used solely for the purpose of delivering safe, appropriate nursing care to you or your patient. Specifically, we use it to:</p>
            <ul>
              <li>Match you with a suitably qualified registered nurse</li>
              <li>Prepare individualized care plans</li>
              <li>Coordinate with consulting physicians where required</li>
              <li>Send appointment confirmations and care updates to you</li>
              <li>Comply with legal and regulatory requirements under Nigerian healthcare law</li>
            </ul>

            <h3>4. Information Sharing</h3>
            <p>
              We do <strong>not</strong> sell, rent, or share your personal or medical information with third parties
              for commercial purposes. Information may only be shared with:
            </p>
            <ul>
              <li>Your assigned registered nurse and the clinical supervision team</li>
              <li>Consulting physicians or medical specialists (with your explicit consent)</li>
              <li>Emergency responders in the event of an acute clinical emergency</li>
              <li>Regulatory authorities as required by law in Nigeria</li>
            </ul>

            <h3>5. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your data from unauthorized
              access, loss, or disclosure. All staff involved in patient care are bound by confidentiality obligations
              in line with NMCN and MDCN professional codes of conduct.
            </p>

            <h3>6. Retention of Records</h3>
            <p>
              Patient care records are retained for a minimum of 7 years in accordance with Nigerian healthcare
              regulations, after which they are securely archived or destroyed.
            </p>

            <h3>7. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data (subject to regulatory retention requirements)</li>
              <li>Withdraw consent for data processing (this may affect our ability to provide care)</li>
            </ul>
            <p>To exercise these rights, contact us at <strong>care@thesanitasnurse.com</strong>.</p>

            <h3>8. Cookies</h3>
            <p>
              Our website uses essential cookies for functionality. We do not use intrusive advertising or tracking cookies.
            </p>

            <h3>9. Contact</h3>
            <p>
              For privacy enquiries, please contact: <strong>care@thesanitasnurse.com</strong> or call
              <strong> 0708 685 6431</strong>.
            </p>
          </div>
        )}

        {activeModal === 'terms' && (
          <div className="legal-content">
            <h2>Terms of Service</h2>
            <p><em>Last updated: August 2026</em></p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By using the services of TheSanitasNurse, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>

            <h3>2. Our Services</h3>
            <p>
              TheSanitasNurse provides professional, registered nursing services in the home setting across Nigeria.
              Our services include but are not limited to ambulant visits, wound care, elderly and dementia care, antenatal and
              postnatal nursing support, and chronic disease health education.
            </p>

            <h3>3. Professional Qualifications</h3>
            <p>
              All nurses deployed are registered with the Nursing and Midwifery Council of Nigeria (NMCN).
              Our clinical practice adheres strictly to the national guidelines of the Medical and Dental Council of Nigeria (MDCN).
            </p>

            <h3>4. Scope of Home Nursing Care</h3>
            <p>
              Home nursing care provided by TheSanitasNurse is a supplement to — and not a replacement for — emergency hospital care, major surgery, or specialized inpatient intensive care. We will promptly escalate and refer patients to hospital care when their clinical condition requires acute intervention.
            </p>

            <h3>5. Patient Responsibilities</h3>
            <p>As a patient or caregiver engaging our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete medical history at intake</li>
              <li>Disclose all current medications and known allergies</li>
              <li>Treat our nurses with dignity and respect</li>
              <li>Maintain a safe home environment for nurse visits</li>
              <li>Promptly inform us of any changes in the patient's condition</li>
              <li>Pay for agreed services within the agreed timeframe</li>
            </ul>

            <h3>6. Cancellations and Scheduling</h3>
            <p>
              Please provide at least 4 hours' notice for cancellation or rescheduling of planned visits.
              Late cancellations or no-shows may incur a minimal administrative charge. Emergency bookings
              are subject to nurse availability in your area.
            </p>

            <h3>7. Limitation of Liability</h3>
            <p>
              TheSanitasNurse will not be held liable for adverse outcomes resulting from incomplete
              or inaccurate medical information provided by the patient or caregiver, failure to follow nurse-recommended
              care instructions, or medical emergencies that require hospital-level intervention beyond our scope.
            </p>

            <h3>8. Governing Law</h3>
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be 
              resolved through amicable mediation before recourse to the courts of Lagos State, Nigeria.
            </p>

            <h3>9. Changes to Terms</h3>
            <p>
              We may update these terms periodically. Continued use of our services after changes constitutes
              acceptance of the revised terms.
            </p>

            <h3>10. Contact</h3>
            <p>
              For questions about these terms: <strong>care@thesanitasnurse.com</strong> |
              <strong> 0708 685 6431</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

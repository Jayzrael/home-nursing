import { useState } from 'react';
import { X, CheckCircle, User, Phone, Mail, FileText, ExternalLink, MessageSquare } from 'lucide-react';
import { AVON_HOME_NURSING_INFO } from '../data/nursingData';

interface IntakeModalProps {
  onClose: () => void;
}

export function IntakeModal({ onClose }: IntakeModalProps) {
  const [form, setForm] = useState({
    patientName: '',
    dob: '',
    gender: 'Female',
    phone: '',
    email: '',
    address: '',
    condition: '',
    allergies: '',
    medications: '',
    emergencyContact: '',
    emergencyPhone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-box-wide" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>

        {!submitted ? (
          <div className="modal-inner">
            <div className="section-badge" style={{ marginBottom: '0.75rem' }}>Patient Intake Form</div>
            <h2 className="modal-title">Patient Medical Intake</h2>
            <p className="modal-subtitle">
              Please provide accurate information so I can review your patient's medical history and prepare a tailored care plan.
              Your information is strictly confidential.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label"><User size={14} /> Patient Full Name *</label>
                  <input type="text" required className="form-input" placeholder="Full name as on ID" value={form.patientName} onChange={e => set('patientName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Date of Birth *</label>
                  <input type="date" required className="form-input" value={form.dob} onChange={e => set('dob', e.target.value)} />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Gender</label>
                  <select className="form-input" value={form.gender} onChange={e => set('gender', e.target.value)}>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label"><Phone size={14} /> Patient / Caregiver Phone *</label>
                  <input type="tel" required className="form-input" placeholder="+234 807 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label"><Mail size={14} /> Email Address</label>
                  <input type="email" className="form-input" placeholder="email@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Home Address (for nurse dispatch) *</label>
                  <input type="text" required className="form-input" placeholder="Street, City, State" value={form.address} onChange={e => set('address', e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label"><FileText size={14} /> Medical Condition / Reason for Home Nursing *</label>
                <textarea required className="form-input" rows={3} placeholder="Describe the patient's diagnosis, symptoms, mobility level, and what care is needed (e.g. 'Stroke survivor, right-sided weakness, needs wound dressing and passive exercises')..." value={form.condition} onChange={e => set('condition', e.target.value)} style={{ resize: 'vertical' }} />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Known Allergies (drugs, food, latex)</label>
                  <input type="text" className="form-input" placeholder="e.g. Penicillin, NSAIDS — or 'None known'" value={form.allergies} onChange={e => set('allergies', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Current Medications</label>
                  <input type="text" className="form-input" placeholder="List drugs and doses or 'None'" value={form.medications} onChange={e => set('medications', e.target.value)} />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Emergency Contact Name *</label>
                  <input type="text" required className="form-input" placeholder="Next of kin full name" value={form.emergencyContact} onChange={e => set('emergencyContact', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Emergency Contact Phone *</label>
                  <input type="tel" required className="form-input" placeholder="+234 800 000 0000" value={form.emergencyPhone} onChange={e => set('emergencyPhone', e.target.value)} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Submit Patient Intake Form
              </button>

              <div className="form-google-link">
                <span>Or fill via Google Forms:&nbsp;</span>
                <a href={AVON_HOME_NURSING_INFO.googleIntakeFormUrl} target="_blank" rel="noopener noreferrer">
                  Open intake form <ExternalLink size={12} />
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="form-success">
            <div className="form-success-icon"><CheckCircle size={36} /></div>
            <h3 className="form-success-title">Patient Intake Submitted!</h3>
            <p className="form-success-text">
              Thank you for registering <strong>{form.patientName}</strong>. I will review the intake details and contact 
              <strong> {form.phone}</strong> to confirm your personalized care plan and schedule the first visit.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onClose}>Done</button>
              <a
                href={`https://wa.me/${AVON_HOME_NURSING_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello TheSanitasNurse, I just submitted a patient intake form for ${form.patientName}. Please confirm receipt.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: '#25d366', color: 'white', border: 'none' }}
              >
                <MessageSquare size={16} /> Confirm on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { X, CheckCircle, User, Phone, Mail, FileText, MapPin, Calendar, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import { AVON_HOME_NURSING_INFO } from '../data/nursingData';

interface BookingModalProps {
  onClose: () => void;
}

const serviceOptions = [
  'Ambulant Patient Home Care',
  'Non-Ambulant / Bedridden Nursing Care',
  'Wound Care & Surgical Dressing',
  'Elderly Care & Dementia Support',
  'Antenatal / Postnatal Mother & Baby Care',
  'Health Education & Chronic Disease Coaching',
  'General / Not Sure — Need Assessment',
];

const locationOptions = [
  'In-Home Visit — Bodija & Agodi Axis (Old/New Bodija, Agodi GRA, Ikolaba, Samonda)',
  'In-Home Visit — Oluyole & Ring Road Hub (Oluyole Estate, Ring Road, Challenge, Liberty)',
  'In-Home Visit — Jericho & Iyaganku (Jericho GRA, Iyaganku GRA, Alalubosa, Eleyele)',
  'In-Home Visit — Akobo, UI, Sango & Moniya Axis',
  'In-Home Visit — Other Ibadan / Oyo State Area',
  'Virtual / Teleconsultation (Remote Guidance)',
];

export function BookingModal({ onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceOptions[0],
    location: locationOptions[0],
    date: '',
    time: 'Morning (7am – 12pm)',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (key: string, val: string) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>

        {!submitted ? (
          <div className="modal-inner">
            <div className="section-badge" style={{ marginBottom: '0.75rem' }}>Private Home Visit Booking</div>
            <h2 className="modal-title">Book a Visit with Nurse Adaeze</h2>
            <p className="modal-subtitle">
              Fill in the form below and I will contact you within 2 hours to confirm your appointment and care details.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label"><User size={14} /> Patient Full Name *</label>
                <input type="text" required className="form-input" placeholder="e.g. Funke Adeyemi" value={form.name} onChange={e => set('name', e.target.value)} />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label"><Phone size={14} /> Phone / WhatsApp *</label>
                  <input type="tel" required className="form-input" placeholder="0708 685 6431" value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label"><Mail size={14} /> Email (optional)</label>
                  <input type="email" className="form-input" placeholder="name@example.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label"><FileText size={14} /> Type of Nursing Service Required *</label>
                <select required className="form-input" value={form.service} onChange={e => set('service', e.target.value)}>
                  {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label"><MapPin size={14} /> Care Location / Area *</label>
                <select required className="form-input" value={form.location} onChange={e => set('location', e.target.value)}>
                  {locationOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label"><Calendar size={14} /> Preferred Start Date *</label>
                  <input type="date" required className="form-input" value={form.date} onChange={e => set('date', e.target.value)} min={new Date().toISOString().split('T')[0]} />
                </div>
                <div className="form-group">
                  <label className="form-label"><Clock size={14} /> Preferred Time Slot</label>
                  <select className="form-input" value={form.time} onChange={e => set('time', e.target.value)}>
                    <option>Morning (7am – 12pm)</option>
                    <option>Afternoon (12pm – 4pm)</option>
                    <option>Evening (4pm – 8pm)</option>
                    <option>Night / Overnight Shift</option>
                    <option>24/7 Live-In Care</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Medical Notes / Symptoms / Special Requirements</label>
                <textarea className="form-input" rows={3} placeholder="Describe the patient's condition, current medications, mobility level, or any other clinical notes..." value={form.notes} onChange={e => set('notes', e.target.value)} style={{ resize: 'vertical' }} />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '0.75rem' }}>
                Submit Appointment Request
              </button>

              <div className="form-google-link">
                <span>Prefer to fill a Google Form?&nbsp;</span>
                <a href={AVON_HOME_NURSING_INFO.googleBookingFormUrl} target="_blank" rel="noopener noreferrer">
                  Open external form <ExternalLink size={12} />
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="form-success">
            <div className="form-success-icon"><CheckCircle size={36} /></div>
            <h3 className="form-success-title">Appointment Request Received!</h3>
            <p className="form-success-text">
              Thank you, <strong>{form.name}</strong>. Your request for <strong>{form.service}</strong> has been received.
              I will call or WhatsApp <strong>{form.phone}</strong> within 2 hours to confirm your scheduled appointment.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onClose}>Done</button>
              <a
                href={`https://wa.me/${AVON_HOME_NURSING_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello TheSanitasNurse! I just submitted a booking request for ${form.service}. My name is ${form.name}. Please confirm my appointment.`)}`}
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

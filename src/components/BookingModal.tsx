import React, { useState } from 'react';
import {
  X,
  CheckCircle,
  User,
  Phone,
  Mail,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Stethoscope,
  HeartPulse,
  Activity,
  Bandage,
  Pill,
  Baby,
  Home,
  Check,
  AlertCircle,
  Loader
} from 'lucide-react';
import { DHERM_HEALTH_INFO, HOME_NURSING_SERVICES } from '../data/nursingData';

const WEB3FORMS_ACCESS_KEY = '571f8847-7db0-4103-af50-d7c2756a91b5';

interface BookingModalProps {
  onClose: () => void;
  initialServiceId?: string;
}

const timeSlotOptions = [
  { id: 'morning', label: 'Morning Shift (7:00 AM – 12:00 PM)', desc: 'Ideal for vitals, wound dressing & medication' },
  { id: 'afternoon', label: 'Afternoon Shift (12:00 PM – 5:00 PM)', desc: 'Convenient post-rest check-in & consultation' },
  { id: 'evening', label: 'Evening Shift (5:00 PM – 8:00 PM)', desc: 'After-work check-in & family care handover' },
  { id: 'overnight', label: 'Overnight Care Shift (7:00 PM – 7:00 AM)', desc: 'Continuous bedside monitoring' },
  { id: 'virtual', label: 'Virtual Teleconsultation Slot (Flexible)', desc: 'Secure video or audio call anytime' }
];

export function BookingModal({ onClose, initialServiceId }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    serviceId: initialServiceId || HOME_NURSING_SERVICES[0].id,
    serviceTitle: initialServiceId
      ? (HOME_NURSING_SERVICES.find(s => s.id === initialServiceId)?.title || HOME_NURSING_SERVICES[0].title)
      : HOME_NURSING_SERVICES[0].title,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: timeSlotOptions[0].label,
    careMode: 'home-visit',
    patientName: '',
    phone: '',
    email: '',
    address: '',
    clinicalNotes: '',
    paymentPreference: 'pay-on-visit'
  });

  const updateField = (key: string, val: string) => {
    setFormData(prev => ({ ...prev, [key]: val }));
  };

  const selectService = (id: string, title: string) => {
    setFormData(prev => ({ ...prev, serviceId: id, serviceTitle: title }));
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setSubmitError(null);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      const payload = new FormData();
      payload.append('access_key', WEB3FORMS_ACCESS_KEY);
      payload.append('subject', `New Appointment Request — ${formData.serviceTitle}`);
      payload.append('from_name', formData.patientName || 'DhermHealthConnect Website');
      payload.append('email', formData.email || 'noreply@dhermhealthconnect.com');
      // Booking details
      payload.append('Patient Name', formData.patientName);
      payload.append('Phone / WhatsApp', formData.phone);
      payload.append('Patient Email', formData.email || 'Not provided');
      payload.append('Service Requested', formData.serviceTitle);
      payload.append('Appointment Date', formData.date);
      payload.append('Preferred Shift', formData.timeSlot);
      payload.append('Care Location / Address', formData.address);
      payload.append('Clinical Notes', formData.clinicalNotes || 'None');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });

      const data = await response.json();

      if (data.success) {
        setCurrentStep(4);
      } else {
        setSubmitError('Submission failed. Please try again or contact us directly on WhatsApp.');
      }
    } catch {
      setSubmitError('A network error occurred. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'online-nursing-consultation': return <Stethoscope size={20} />;
      case 'health-education': return <HeartPulse size={20} />;
      case 'bp-diabetes-monitoring': return <Activity size={20} />;
      case 'wound-care-guidance': return <Bandage size={20} />;
      case 'medication-education': return <Pill size={20} />;
      case 'antenatal-postnatal-support': return <Baby size={20} />;
      case 'home-nursing-visits': return <Home size={20} />;
      default: return <Stethoscope size={20} />;
    }
  };

  const whatsappConfirmationText = `Hello Nurse Adeyemi Damilola Mary! I have booked an appointment through DhermHealthConnect.%0A%0A*Service:* ${formData.serviceTitle}%0A*Date:* ${formData.date}%0A*Time:* ${formData.timeSlot}%0A*Patient:* ${formData.patientName}%0A*Contact:* ${formData.phone}%0A*Location:* ${formData.address || 'In-Home Visit'}%0A*Notes:* ${formData.clinicalNotes || 'None'}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box booking-wizard-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {/* Modal Wizard Header */}
        <div className="wizard-header">
          <div className="section-badge" style={{ marginBottom: '0.5rem' }}>
            <Sparkles size={13} className="gold-accent-icon" />
            <span>4-Step Online Scheduling</span>
          </div>
          <h2 className="modal-title">Book an Appointment</h2>
          <p className="modal-subtitle">
            {currentStep === 1 && "Step 1 of 4: Select the nursing service you need"}
            {currentStep === 2 && "Step 2 of 4: Choose your preferred date and time"}
            {currentStep === 3 && "Step 3 of 4: Enter patient details and location"}
            {currentStep === 4 && "Step 4 of 4: Appointment Confirmed!"}
          </p>

          {/* 4-Step Progress Indicator */}
          <div className="wizard-step-tracker">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`step-bubble-item ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
              >
                <div className="step-bubble">
                  {currentStep > step ? <Check size={14} /> : step}
                </div>
                <span className="step-bubble-label">
                  {step === 1 && "Service"}
                  {step === 2 && "Date & Time"}
                  {step === 3 && "Details"}
                  {step === 4 && "Confirmation"}
                </span>
                {step < 4 && <div className={`step-connector-line ${currentStep > step ? 'filled' : ''}`}></div>}
              </div>
            ))}
          </div>
        </div>

        {/* STEP 1: CHOOSE SERVICE */}
        {currentStep === 1 && (
          <div className="wizard-step-content">
            <h4 className="wizard-step-title">1. Choose a Nursing Service</h4>
            <div className="service-selection-grid">
              {HOME_NURSING_SERVICES.map(srv => (
                <div
                  key={srv.id}
                  className={`service-select-card ${formData.serviceId === srv.id ? 'selected' : ''}`}
                  onClick={() => selectService(srv.id, srv.title)}
                >
                  <div className="select-card-icon">
                    {getServiceIcon(srv.id)}
                  </div>
                  <div className="select-card-body">
                    <div className="select-card-title">{srv.title}</div>
                    <div className="select-card-desc">{srv.shortDesc}</div>
                    <span className="select-card-badge">{srv.categoryLabel}</span>
                  </div>
                  <div className="select-card-radio">
                    <div className={`radio-dot ${formData.serviceId === srv.id ? 'active' : ''}`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="wizard-actions">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                onClick={() => setCurrentStep(2)}
              >
                Continue to Date & Time <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DATE & TIME */}
        {currentStep === 2 && (
          <form onSubmit={nextStep} className="wizard-step-content">
            <h4 className="wizard-step-title">2. Select Preferred Date & Time</h4>

            <div className="selected-summary-pill">
              <div className="pill-icon">{getServiceIcon(formData.serviceId)}</div>
              <div>
                <strong>Selected:</strong> {formData.serviceTitle}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                <CalendarIcon size={15} /> Appointment Date *
              </label>
              <input
                type="date"
                required
                className="form-input"
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={e => updateField('date', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Clock size={15} /> Preferred Shift / Time Slot *
              </label>
              <div className="timeslot-grid">
                {timeSlotOptions.map(slot => (
                  <div
                    key={slot.id}
                    className={`timeslot-card ${formData.timeSlot === slot.label ? 'selected' : ''}`}
                    onClick={() => updateField('timeSlot', slot.label)}
                  >
                    <div className="timeslot-radio">
                      <div className={`radio-dot ${formData.timeSlot === slot.label ? 'active' : ''}`}></div>
                    </div>
                    <div>
                      <div className="timeslot-label">{slot.label}</div>
                      <div className="timeslot-sub">{slot.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="wizard-actions-split">
              <button type="button" className="btn btn-outline" onClick={prevStep}>
                <ArrowLeft size={16} /> Back
              </button>
              <button type="submit" className="btn btn-primary">
                Next: Enter Patient Details <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: FILL IN DETAILS + SUBMIT TO WEB3FORMS */}
        {currentStep === 3 && (
          <form onSubmit={handleFinalSubmit} className="wizard-step-content">
            <h4 className="wizard-step-title">3. Patient Contact & Care Location</h4>

            <div className="form-group">
              <label className="form-label">
                <User size={15} /> Patient / Care Recipient Full Name *
              </label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. Mrs. Funke Adebayo"
                value={formData.patientName}
                onChange={e => updateField('patientName', e.target.value)}
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">
                  <Phone size={15} /> Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  className="form-input"
                  placeholder="0706 395 8561"
                  value={formData.phone}
                  onChange={e => updateField('phone', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  <Mail size={15} /> Email Address (for confirmation)
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={e => updateField('email', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                <MapPin size={15} /> Home Address or Care Location *
              </label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g. 14 Palm Avenue, Victoria Island / Bodija Estate"
                value={formData.address}
                onChange={e => updateField('address', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Clinical Notes / Patient Symptoms / Requirements
              </label>
              <textarea
                className="form-input"
                rows={3}
                placeholder="Please describe medical conditions (e.g. post-surgery wound dressing, BP checks, newborn care, insulin support)..."
                value={formData.clinicalNotes}
                onChange={e => updateField('clinicalNotes', e.target.value)}
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Inline error message */}
            {submitError && (
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                background: '#FEF2F2',
                border: '1.5px solid #FECACA',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1rem',
                marginBottom: '1rem',
                color: '#B91C1C',
                fontSize: '0.88rem'
              }}>
                <AlertCircle size={17} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                <span>{submitError}</span>
              </div>
            )}

            <div className="wizard-actions-split">
              <button type="button" className="btn btn-outline" onClick={prevStep} disabled={submitting}>
                <ArrowLeft size={16} /> Back
              </button>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader size={16} style={{ animation: 'spin 1s linear infinite' }} />
                    Submitting…
                  </>
                ) : (
                  <>
                    Complete Booking & Dispatch <CheckCircle size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: CONFIRMATION */}
        {currentStep === 4 && (
          <div className="wizard-step-content confirmation-view">
            <div className="form-success-icon-wrap">
              <CheckCircle size={44} className="emerald-check-lg" />
            </div>
            <h3 className="form-success-title">Appointment Request Confirmed!</h3>
            <p className="form-success-text">
              Thank you, <strong>{formData.patientName || 'Patient'}</strong>. Your appointment request for <strong>{formData.serviceTitle}</strong> has been sent. Nurse Adeyemi will reach out to confirm your visit.
            </p>

            {/* Receipt Summary Card */}
            <div className="booking-summary-card">
              <div className="summary-row">
                <span className="summary-lbl">Service:</span>
                <span className="summary-val">{formData.serviceTitle}</span>
              </div>
              <div className="summary-row">
                <span className="summary-lbl">Scheduled Date:</span>
                <span className="summary-val">{formData.date}</span>
              </div>
              <div className="summary-row">
                <span className="summary-lbl">Shift:</span>
                <span className="summary-val">{formData.timeSlot}</span>
              </div>
              <div className="summary-row">
                <span className="summary-lbl">Primary Nurse:</span>
                <span className="summary-val">{DHERM_HEALTH_INFO.nurseName} ({DHERM_HEALTH_INFO.nurseQualifications})</span>
              </div>
              <div className="summary-row">
                <span className="summary-lbl">Contact:</span>
                <span className="summary-val">{formData.phone}</span>
              </div>
              <div className="summary-row">
                <span className="summary-lbl">Location:</span>
                <span className="summary-val">{formData.address || 'In-Home Visit'}</span>
              </div>
            </div>

            <p className="confirmation-sub-note">
              Your booking details have been sent to Nurse Adeyemi's inbox. You can also send an instant WhatsApp message below for immediate acknowledgement.
            </p>

            {/* Action Buttons */}
            <div className="confirmation-actions">
              <a
                href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${whatsappConfirmationText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', marginBottom: '0.65rem' }}
              >
                <MessageSquare size={18} /> Send Instant Confirmation on WhatsApp
              </a>
              <button
                type="button"
                className="btn btn-outline"
                style={{ width: '100%' }}
                onClick={onClose}
              >
                Done / Close Modal
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Stethoscope, 
  HeartPulse, 
  Activity, 
  Bandage, 
  Pill, 
  Baby, 
  Home, 
  Clock, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { HOME_NURSING_SERVICES } from '../data/nursingData';
import type { HomeNursingServiceItem } from '../data/nursingData';

interface ServicesProps {
  onOpenBooking: () => void;
}

const iconMapping: Record<string, React.ReactNode> = {
  'online-nursing-consultation': <Stethoscope size={28} />,
  'health-education': <HeartPulse size={28} />,
  'bp-diabetes-monitoring': <Activity size={28} />,
  'wound-care-guidance': <Bandage size={28} />,
  'medication-education': <Pill size={28} />,
  'antenatal-postnatal-support': <Baby size={28} />,
  'home-nursing-visits': <Home size={28} />,
};

export function Services({ onOpenBooking }: ServicesProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<HomeNursingServiceItem | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All 7 Services' },
    { id: 'home-visit', label: 'In-Home Visits' },
    { id: 'consultation', label: 'Virtual Consultations' },
    { id: 'maternal', label: 'Maternal & Baby' },
    { id: 'wound', label: 'Wound & Surgical' },
    { id: 'monitoring', label: 'Vitals & Diabetes' },
    { id: 'education', label: 'Health Education' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? HOME_NURSING_SERVICES 
    : HOME_NURSING_SERVICES.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="section-py services-section">
      <div className="container">
        
        <div className="section-header-center">
          <div className="section-badge">
            <Sparkles size={14} className="gold-accent-icon" />
            <span>Comprehensive Clinical Suite</span>
          </div>
          <h2 className="section-title">Our Professional Nursing Services</h2>
          <p className="section-subtitle">
            Delivering hospital-standard clinical expertise, preventive coaching, and compassionate bedside care directly to your doorstep.
          </p>

          {/* Category Filter Chips */}
          <div className="service-filters-bar">
            {filterCategories.map(cat => (
              <button
                key={cat.id}
                className={`service-filter-btn${activeFilter === cat.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service: HomeNursingServiceItem) => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              <div className="service-card-top">
                <span className="service-card-badge">{service.categoryLabel}</span>
                <div className="service-card-icon">
                  {iconMapping[service.id] ?? <Stethoscope size={28} />}
                </div>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDesc}</p>

              <div className="service-duration-tag">
                <Clock size={13} /> {service.duration}
              </div>

              <ul className="service-card-features">
                {service.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="service-feature-item">
                    <CheckCircle size={15} className="check-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <button 
                  className="service-card-cta" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking();
                  }}
                >
                  Book Appointment <ArrowRight size={15} />
                </button>
                <span className="service-card-learn-more">
                  Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed service view */}
        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal-box service-detail-modal" onClick={e => e.stopPropagation()}>
              <div className="service-modal-header">
                <div className="service-card-icon modal-icon">
                  {iconMapping[selectedService.id] ?? <Stethoscope size={32} />}
                </div>
                <div>
                  <span className="service-card-badge">{selectedService.categoryLabel}</span>
                  <h3 className="modal-title" style={{ marginTop: '0.4rem' }}>{selectedService.title}</h3>
                </div>
              </div>

              <p className="modal-lead" style={{ marginBottom: '1.25rem', color: 'var(--text-body)' }}>
                {selectedService.fullDesc}
              </p>

              <div className="modal-detail-section">
                <h4 className="modal-subheading">What Is Included:</h4>
                <ul className="service-card-features">
                  {selectedService.features.map((f, i) => (
                    <li key={i} className="service-feature-item">
                      <CheckCircle size={16} className="check-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-detail-section" style={{ marginTop: '1.25rem' }}>
                <h4 className="modal-subheading">Ideal For:</h4>
                <ul className="suitable-for-list">
                  {selectedService.suitableFor.map((item, i) => (
                    <li key={i} className="suitable-item">
                      <ShieldCheck size={14} className="gold-accent-icon" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions-row" style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary" 
                  style={{ flex: 1 }}
                  onClick={() => {
                    setSelectedService(null);
                    onOpenBooking();
                  }}
                >
                  Book This Service Now
                </button>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

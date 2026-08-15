import { CheckCircle, ArrowRight, Home, Droplets, Baby, Stethoscope, BookOpen, HeartPulse } from 'lucide-react';
import { HOME_NURSING_SERVICES } from '../data/nursingData';
import type { HomeNursingServiceItem } from '../data/nursingData';

interface ServicesProps {
  onOpenBooking: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  'ambulant-home-care': <Stethoscope size={26} />,
  'non-ambulant-bedridden-care': <HeartPulse size={26} />,
  'wound-care-surgical-dressing': <Droplets size={26} />,
  'elderly-geriatric-dementia-care': <Home size={26} />,
  'antenatal-postnatal-mother-baby-care': <Baby size={26} />,
  'health-education-chronic-disease': <BookOpen size={26} />,
};

export function Services({ onOpenBooking }: ServicesProps) {
  return (
    <section id="services" className="section-py services-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">Private Clinical Home Care</div>
          <h2 className="section-title">Nursing Care Delivered to Your Home</h2>
          <p className="section-subtitle">
            From ambulant check-ups and bedridden bedside nursing to sterile wound dressing and 
            postnatal midwife care — dedicated 1-on-1 clinical support tailored to your family's needs.
          </p>
        </div>

        <div className="services-grid">
          {HOME_NURSING_SERVICES.map((service: HomeNursingServiceItem) => (
            <div key={service.id} className="service-card">
              <span className="service-card-badge">{service.categoryLabel}</span>
              <div className="service-card-icon">
                {iconMap[service.id] ?? <Stethoscope size={26} />}
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.shortDesc}</p>

              <ul className="service-card-features">
                {service.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="service-feature-item">
                    <CheckCircle size={15} className="check-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="service-card-cta" onClick={onOpenBooking}>
                Book This Service <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

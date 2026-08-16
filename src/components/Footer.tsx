import { PlusCircle, Phone, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { AVON_HOME_NURSING_INFO } from '../data/nursingData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export function Footer({ onNavigate, onOpenPrivacy, onOpenTerms }: FooterProps) {
  const nav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem', cursor: 'pointer' }} onClick={() => nav('home')}>
              <div className="logo-icon">
                <PlusCircle size={20} />
              </div>
              <div>
                <div className="footer-brand-name">TheSanitasNurse</div>
                <div className="footer-brand-sub">Private Home Nursing · Ibadan, Nigeria</div>
              </div>
            </div>
            <p className="footer-bio">
              Licensed Registered Nurse & Midwife (NMCN) delivering dedicated hospital-grade clinical care 
              to homes across Ibadan, Oyo State (Bodija, Oluyole, Jericho, Ring Road, Akobo & surrounding areas).
            </p>
            <a
              href={`https://wa.me/${AVON_HOME_NURSING_INFO.whatsappNumber}?text=${encodeURIComponent(AVON_HOME_NURSING_INFO.whatsappPrefill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{ background: '#25d366', color: 'white', border: 'none', display: 'inline-flex' }}
            >
              <MessageSquare size={14} /> Direct WhatsApp Line
            </a>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Our Services</div>
            <ul className="footer-links-list">
              <li><button className="footer-link-btn" onClick={() => nav('services')}>Ambulant Patient Home Care</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('services')}>Bedridden Nursing Care</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('services')}>Wound Care & Dressing</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('services')}>Elderly & Dementia Care</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('services')}>Antenatal & Postnatal Care</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('services')}>Health Education & Coaching</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links-list">
              <li><button className="footer-link-btn" onClick={() => nav('home')}>Home</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('about')}>About Us</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('areas')}>Service Areas & Hours</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('blog')}>Health Blog</button></li>
              <li><button className="footer-link-btn" onClick={() => nav('contact')}>Contact Us</button></li>
              <li><button className="footer-link-btn" onClick={onOpenPrivacy}>Privacy Policy</button></li>
              <li><button className="footer-link-btn" onClick={onOpenTerms}>Terms of Service</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer-col-title">Contact & Hubs</div>
            {AVON_HOME_NURSING_INFO.phones.map((p, i) => (
              <div key={i} className="footer-contact-item">
                <Phone size={14} className="footer-contact-icon" />
                <a href={`tel:${p.link}`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ fontSize: '0.78rem', display: 'block', opacity: 0.7 }}>{p.label}</span>
                  {p.number}
                </a>
              </div>
            ))}
            <div className="footer-contact-item">
              <Mail size={14} className="footer-contact-icon" />
              <a href={`mailto:${AVON_HOME_NURSING_INFO.email}`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                {AVON_HOME_NURSING_INFO.email}
              </a>
            </div>
            {AVON_HOME_NURSING_INFO.locations.map((loc, i) => (
              <div key={i} className="footer-contact-item">
                <MapPin size={14} className="footer-contact-icon" />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'rgba(255,255,255,0.65)', marginBottom: '0.1rem' }}>{loc.name}</div>
                  <div style={{ fontSize: '0.8rem' }}>{loc.address}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TheSanitasNurse Healthcare Nigeria. NMCN & MDCN Certified Standards.</span>
          <div className="footer-bottom-links">
            <button className="footer-link-btn" onClick={onOpenPrivacy}>Privacy Policy</button>
            <button className="footer-link-btn" onClick={onOpenTerms}>Terms of Service</button>
            <button className="footer-scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Back to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Shield, Menu, X, Calendar, Phone, MessageSquare, HeartHandshake } from 'lucide-react';
import { DHERM_HEALTH_INFO } from '../data/nursingData';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export function Navbar({ activePage, onNavigate, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const nav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'booking', label: 'Book Appointment' },
    { id: 'blog', label: 'Patient Resources' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Quick Triage Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-emergency">
              <span className="pulse-dot"></span>
              <span className="topbar-label">Direct Care Line:</span>
              <a href={`tel:${DHERM_HEALTH_INFO.phones[0].link}`} className="topbar-phone-link">
                {DHERM_HEALTH_INFO.phones[0].number}
              </a>
            </div>
            <div className="topbar-links">
              <span className="topbar-badge-pill">
                <Shield size={11} /> Certified RN, RM, BLS, BNSc
              </span>
              <a
                href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-link topbar-whatsapp"
              >
                <MessageSquare size={12} /> WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            
            {/* Logo */}
            <div className="nav-logo" onClick={() => nav('home')}>
              <div className="logo-icon">
                <HeartHandshake size={22} />
              </div>
              <div className="logo-text-wrap">
                <div className="logo-text-primary">DhermHealthConnect</div>
                <div className="logo-text-sub">Licensed Nursing Care · {DHERM_HEALTH_INFO.nurseQualifications}</div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              {pages.map(p => (
                <li key={p.id}>
                  <button
                    className={`nav-link-btn${activePage === p.id ? ' active' : ''}`}
                    onClick={() => {
                      if (p.id === 'booking') {
                        onOpenBooking();
                      } else {
                        nav(p.id);
                      }
                    }}
                  >
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="nav-actions">
              <a
                href={`tel:${DHERM_HEALTH_INFO.phones[0].link}`}
                className="btn btn-outline btn-sm nav-call-btn"
              >
                <Phone size={14} /> Call Direct
              </a>
              <button
                className="btn btn-primary btn-sm nav-book-btn"
                onClick={onOpenBooking}
              >
                <Calendar size={14} /> Book a Visit
              </button>
              
              {/* Mobile Hamburger Toggle Button */}
              <button
                className={`nav-toggle${menuOpen ? ' active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown & Backdrop */}
        {menuOpen && (
          <div className="mobile-backdrop" onClick={() => setMenuOpen(false)}></div>
        )}
        <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
          <div className="mobile-drawer-inner">
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-nurse-badge">
                <Shield size={13} /> {DHERM_HEALTH_INFO.nurseName} ({DHERM_HEALTH_INFO.nurseQualifications})
              </div>
            </div>

            <nav className="mobile-nav-list">
              {pages.map(p => (
                <button
                  key={p.id}
                  className={`mobile-menu-link${activePage === p.id ? ' active' : ''}`}
                  onClick={() => {
                    if (p.id === 'booking') {
                      setMenuOpen(false);
                      onOpenBooking();
                    } else {
                      nav(p.id);
                    }
                  }}
                >
                  <span>{p.label}</span>
                  {activePage === p.id && <span className="mobile-active-dot">•</span>}
                </button>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <button
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginBottom: '0.65rem' }}
                onClick={() => { setMenuOpen(false); onOpenBooking(); }}
              >
                <Calendar size={16} /> Book an Appointment
              </button>
              
              <div className="mobile-drawer-quick-links">
                <a
                  href={`tel:${DHERM_HEALTH_INFO.phones[0].link}`}
                  className="btn btn-outline"
                  style={{ flex: 1 }}
                >
                  <Phone size={15} /> Call Direct
                </a>
                <a
                  href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ flex: 1 }}
                >
                  <MessageSquare size={15} /> WhatsApp
                </a>
              </div>

              <div className="mobile-drawer-contact-note">
                {DHERM_HEALTH_INFO.motto} · Direct Line: {DHERM_HEALTH_INFO.phone}
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}

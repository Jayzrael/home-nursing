import { useState, useEffect } from 'react';
import { PlusCircle, Menu, X, Calendar, Phone } from 'lucide-react';
import { THESANITAS_NURSE_INFO } from '../data/nursingData';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export function Navbar({ activePage, onNavigate, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Nursing Services' },
    { id: 'about', label: 'About Your Nurse' },
    { id: 'areas', label: 'Areas & Hours' },
    { id: 'blog', label: 'Health Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <div className="topbar-emergency">
              <span className="pulse-dot"></span>
              <span>Direct Nurse Line:</span>
              <a href={`tel:${THESANITAS_NURSE_INFO.phones[0].link}`} style={{ color: '#fff', fontWeight: 700 }}>
                {THESANITAS_NURSE_INFO.phones[0].number}
              </a>
            </div>
            <div className="topbar-links">
              <a href={`mailto:${THESANITAS_NURSE_INFO.email}`} className="topbar-link">
                {THESANITAS_NURSE_INFO.email}
              </a>
              <a
                href={`https://wa.me/${THESANITAS_NURSE_INFO.whatsappNumber}?text=${encodeURIComponent(THESANITAS_NURSE_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="topbar-link"
              >
                Direct WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <div className="nav-logo" onClick={() => nav('home')}>
              <div className="logo-icon">
                <PlusCircle size={22} />
              </div>
              <div>
                <div className="logo-text-primary">TheSanitasNurse</div>
                <div className="logo-text-sub">Licensed Private Home Nurse · Nigeria</div>
              </div>
            </div>

            <ul className="nav-links">
              {pages.map(p => (
                <li key={p.id}>
                  <button
                    className={`nav-link-btn${activePage === p.id ? ' active' : ''}`}
                    onClick={() => nav(p.id)}
                  >
                    {p.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <a
                href={`tel:${THESANITAS_NURSE_INFO.phones[0].link}`}
                className="btn btn-outline btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <Phone size={14} /> Call Direct
              </a>
              <button className="btn btn-primary btn-sm" onClick={onOpenBooking}>
                <Calendar size={15} /> Book a Visit
              </button>
              <button
                className="nav-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
            {pages.map(p => (
              <button
                key={p.id}
                className={`mobile-menu-link${activePage === p.id ? ' active' : ''}`}
                onClick={() => nav(p.id)}
              >
                {p.label}
              </button>
            ))}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
              <a
                href={`tel:${THESANITAS_NURSE_INFO.phones[0].link}`}
                className="btn btn-outline"
                style={{ flex: 1, textAlign: 'center' }}
              >
                <Phone size={15} /> Call Direct
              </a>
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => { setMenuOpen(false); onOpenBooking(); }}>
                <Calendar size={16} /> Book Visit
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

import { useState, useEffect } from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { NurseVetting } from './components/NurseVetting';
import { Services } from './components/Services';
import { WhyHomeCare } from './components/WhyHomeCare';
import { HowItWorks } from './components/HowItWorks';
import { DiasporaCare } from './components/DiasporaCare';
import { AreasAndHours } from './components/AreasAndHours';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { BookingCTA } from './components/BookingCTA';
import { Blog } from './components/Blog';
import { ArticlePage } from './components/ArticlePage';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { IntakeModal } from './components/IntakeModal';
import { LegalModals } from './components/LegalModals';
import { DHERM_HEALTH_INFO } from './data/nursingData';
import './App.css';

type Page = 'home' | 'about' | 'services' | 'blog' | 'contact';
type Modal = 'booking' | 'intake' | 'privacy' | 'terms' | null;

export function App() {
  const [page, setPage] = useState<Page>('home');
  const [modal, setModal] = useState<Modal>(null);
  const [articleSlug, setArticleSlug] = useState<string | null>(null);

  // Hash-based routing
  useEffect(() => {
    const parse = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('blog/')) {
        const slug = hash.replace('blog/', '');
        setPage('blog');
        setArticleSlug(slug);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (['home', 'about', 'services', 'blog', 'contact'].includes(hash as Page)) {
        setPage(hash as Page);
        setArticleSlug(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    parse();
    window.addEventListener('hashchange', parse);
    return () => window.removeEventListener('hashchange', parse);
  }, []);

  const navigate = (p: string) => {
    if (p === 'booking') {
      openBooking();
      return;
    }
    setPage(p as Page);
    setArticleSlug(null);
    window.location.hash = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openArticle = (slug: string) => {
    setArticleSlug(slug);
    setPage('blog');
    window.location.hash = `blog/${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBooking = () => setModal('booking');
  const openIntake = () => setModal('intake');
  const closeModal = () => setModal(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navigation */}
      <Navbar activePage={page} onNavigate={navigate} onOpenBooking={openBooking} />

      <main style={{ flex: 1 }}>

        {/* HOME PAGE */}
        {page === 'home' && (
          <>
            <Hero onOpenBooking={openBooking} onNavigate={navigate} />
            <TrustBar />
            <Services onOpenBooking={openBooking} />
            <NurseVetting />
            <WhyHomeCare onOpenBooking={openBooking} />
            <HowItWorks onOpenBooking={openBooking} />
            <DiasporaCare onOpenBooking={openBooking} />
            <AreasAndHours />
            <FAQ />
            <About onOpenBooking={openBooking} />
            <div id="contact-section">
              <BookingCTA onOpenBooking={openBooking} onOpenIntake={openIntake} />
            </div>

            {/* Health Education Blog Preview on Home */}
            <section className="section-py" style={{ background: 'var(--surface)' }}>
              <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div className="section-badge">
                      <Sparkles size={13} className="gold-accent-icon" />
                      <span>Patient Resources</span>
                    </div>
                    <h2 className="section-title">Health Literacy & Wellness Guides</h2>
                    <p className="section-subtitle">Practical healthcare articles and disease prevention coaching from licensed clinical practitioners.</p>
                  </div>
                  <button className="btn btn-primary" onClick={() => navigate('blog')}>
                    View All Resources →
                  </button>
                </div>
                <Blog onSelectPost={openArticle} />
              </div>
            </section>
          </>
        )}

        {/* ABOUT PAGE */}
        {page === 'about' && (
          <>
            <div style={{ padding: '3.5rem 0 0', background: 'var(--surface)', borderBottom: '1px solid var(--lilac-border)' }}>
              <div className="container">
                <div className="section-badge">
                  <Sparkles size={13} className="gold-accent-icon" />
                  <span>About Your Nurse</span>
                </div>
                <h1 className="section-title">About {DHERM_HEALTH_INFO.nurseName}</h1>
                <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                  Registered Nurse & Midwife ({DHERM_HEALTH_INFO.nurseQualifications}) providing hospital-standard clinical home care, chronic condition monitoring, and maternal health support.
                </p>
              </div>
            </div>
            <About onOpenBooking={openBooking} />
            <NurseVetting />
            <div id="contact-section">
              <BookingCTA onOpenBooking={openBooking} onOpenIntake={openIntake} />
            </div>
          </>
        )}

        {/* SERVICES PAGE */}
        {page === 'services' && (
          <>
            <div style={{ padding: '3.5rem 0 0', background: 'var(--surface)', borderBottom: '1px solid var(--lilac-border)' }}>
              <div className="container">
                <div className="section-badge">
                  <Sparkles size={13} className="gold-accent-icon" />
                  <span>Clinical Suite</span>
                </div>
                <h1 className="section-title">Our 7 Core Nursing Specialties</h1>
                <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                  From virtual consultations to sterile wound care and in-home bedside nursing, explore our comprehensive care offerings.
                </p>
              </div>
            </div>
            <Services onOpenBooking={openBooking} />
            <HowItWorks onOpenBooking={openBooking} />
            <WhyHomeCare onOpenBooking={openBooking} />
            <div id="contact-section">
              <BookingCTA onOpenBooking={openBooking} onOpenIntake={openIntake} />
            </div>
          </>
        )}

        {/* BLOG / PATIENT RESOURCES — article view */}
        {page === 'blog' && articleSlug && (
          <ArticlePage
            slug={articleSlug}
            onBack={() => { setArticleSlug(null); window.location.hash = 'blog'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onSelectPost={openArticle}
            onOpenBooking={openBooking}
          />
        )}

        {/* BLOG / PATIENT RESOURCES — listing view */}
        {page === 'blog' && !articleSlug && (
          <>
            <Blog onSelectPost={openArticle} />
            <div id="contact-section">
              <BookingCTA onOpenBooking={openBooking} onOpenIntake={openIntake} />
            </div>
          </>
        )}

        {/* CONTACT PAGE */}
        {page === 'contact' && (
          <div id="contact-section">
            <div style={{ padding: '3.5rem 0 0', background: 'var(--surface)', borderBottom: '1px solid var(--lilac-border)' }}>
              <div className="container">
                <div className="section-badge">
                  <Sparkles size={13} className="gold-accent-icon" />
                  <span>Get in Touch</span>
                </div>
                <h1 className="section-title">Contact DhermHealthConnect</h1>
                <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                  We are here to answer your clinical questions, discuss scheduling, and arrange in-home visits or virtual consultations.
                </p>
              </div>
            </div>
            <BookingCTA onOpenBooking={openBooking} onOpenIntake={openIntake} />
            <AreasAndHours />
            <FAQ />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigate}
        onOpenPrivacy={() => setModal('privacy')}
        onOpenTerms={() => setModal('terms')}
      />

      {/* WhatsApp Floating Action Button */}
      <a
        href={`https://wa.me/${DHERM_HEALTH_INFO.whatsappNumber}?text=${encodeURIComponent(DHERM_HEALTH_INFO.whatsappPrefill)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
        title="WhatsApp — Speak with Nurse Emmanuel Damilola Mary"
      >
        <div className="whatsapp-fab-pulse"></div>
        <MessageSquare size={26} />
      </a>

      {/* Modals */}
      {modal === 'booking' && <BookingModal onClose={closeModal} />}
      {modal === 'intake' && <IntakeModal onClose={closeModal} />}
      {(modal === 'privacy' || modal === 'terms') && (
        <LegalModals activeModal={modal} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;

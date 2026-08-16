import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { NurseVetting } from './components/NurseVetting';
import { Services } from './components/Services';
import { WhyHomeCare } from './components/WhyHomeCare';
import { HowItWorks } from './components/HowItWorks';
import { DiasporaCare } from './components/DiasporaCare';
import { Testimonials } from './components/Testimonials';
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
import { AVON_HOME_NURSING_INFO } from './data/nursingData';
import './App.css';

type Page = 'home' | 'services' | 'areas' | 'about' | 'blog' | 'contact';
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
      } else if (['home', 'services', 'areas', 'about', 'blog', 'contact'].includes(hash as Page)) {
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

  // Contact page scrolls to BookingCTA
  useEffect(() => {
    if (page === 'contact') {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
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
            <Testimonials />
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
                    <div className="section-badge">Health Education</div>
                    <h2 className="section-title">Latest Health Articles</h2>
                    <p className="section-subtitle">Real educational articles written by our Nigerian nurses and medical team.</p>
                  </div>
                  <button className="btn btn-primary" onClick={() => navigate('blog')}>
                    View All Articles →
                  </button>
                </div>
                <Blog onSelectPost={openArticle} />
              </div>
            </section>
          </>
        )}

        {/* SERVICES PAGE */}
        {page === 'services' && (
          <>
            <div style={{ padding: '3rem 0 0', background: 'var(--surface)', borderBottom: '1px solid var(--lilac-border)' }}>
              <div className="container">
                <div className="section-badge">Clinical Home Care</div>
                <h1 className="section-title">Private Home Nursing Services</h1>
                <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                  Hospital-grade clinical care delivered directly to your bedside with guaranteed 
                  one-on-one nurse continuity.
                </p>
              </div>
            </div>
            <Services onOpenBooking={openBooking} />
            <NurseVetting />
            <HowItWorks onOpenBooking={openBooking} />
            <div id="contact-section">
              <BookingCTA onOpenBooking={openBooking} onOpenIntake={openIntake} />
            </div>
          </>
        )}

        {/* AREAS PAGE */}
        {page === 'areas' && (
          <>
            <div style={{ padding: '3rem 0 0', background: 'var(--surface)', borderBottom: '1px solid var(--lilac-border)' }}>
              <div className="container">
                <div className="section-badge">Service Reach</div>
                <h1 className="section-title">Service Areas & Practice Hours</h1>
                <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                  Explore the regions I serve across Ibadan (Bodija, Oluyole, Jericho, Ring Road, Akobo & beyond), and check availability for home visits.
                </p>
              </div>
            </div>
            <AreasAndHours />
            <FAQ />
            <div id="contact-section">
              <BookingCTA onOpenBooking={openBooking} onOpenIntake={openIntake} />
            </div>
          </>
        )}

        {/* ABOUT PAGE */}
        {page === 'about' && (
          <>
            <div style={{ padding: '3rem 0 0', background: 'var(--surface)', borderBottom: '1px solid var(--lilac-border)' }}>
              <div className="container">
                <div className="section-badge">Who I Am</div>
                <h1 className="section-title">About Nurse Adaeze & TheSanitasNurse</h1>
                <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                  Providing dedicated, hospital-grade clinical and compassionate private home nursing care in Ibadan, Oyo State.
                </p>
              </div>
            </div>
            <About onOpenBooking={openBooking} />
            <NurseVetting />
            <Testimonials />
            <div id="contact-section">
              <BookingCTA onOpenBooking={openBooking} onOpenIntake={openIntake} />
            </div>
          </>
        )}

        {/* BLOG — article view */}
        {page === 'blog' && articleSlug && (
          <ArticlePage
            slug={articleSlug}
            onBack={() => { setArticleSlug(null); window.location.hash = 'blog'; window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onSelectPost={openArticle}
            onOpenBooking={openBooking}
          />
        )}

        {/* BLOG — listing view */}
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

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${AVON_HOME_NURSING_INFO.whatsappNumber}?text=${encodeURIComponent(AVON_HOME_NURSING_INFO.whatsappPrefill)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat on WhatsApp"
        title="WhatsApp — Book a Nurse / Quick Triage"
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

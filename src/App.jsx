import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Member from './components/Member';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isMember = route === '#/member';

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-50%,rgba(168,85,247,0.25),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(99,102,241,0.25),transparent),#0b0b12]">
      <Navbar />
      <main>
        {isMember ? (
          <Member />
        ) : (
          <>
            <Hero />
            <Features />
            <Showcase />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}

export default App;

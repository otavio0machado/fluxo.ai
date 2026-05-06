import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Connectors from './components/Connectors';
import Workflows from './components/Workflows';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink text-chalk selection:bg-warn/30 selection:text-chalk">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Connectors />
        <Workflows />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;

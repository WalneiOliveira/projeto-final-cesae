import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Percurso from '../components/Percurso';
import Testemunhos from '../components/Testemunhos';
import Artigos from '../components/Artigos';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Percurso />
      <FAQ />
      <CTA />
      <Testemunhos />
      <Artigos />
      <Footer />
    </>
  );
};

export default Home;

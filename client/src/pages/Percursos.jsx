import Navbar from '../components/Navbar';
import HeroPercurso from '../components/HeroPercurso';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FeaturesPercurso from '../components/FeaturesPercurso';
import Curso from '../components/Curso';
import Pagination from '../components/Pagination';

const Percursos = () => {
  return (
    <>
      <Navbar />
      <HeroPercurso />
      <Curso />
      <CTA />
      <FeaturesPercurso />
      <Footer />
    </>
  );
};

export default Percursos;

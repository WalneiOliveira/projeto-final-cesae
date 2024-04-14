import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CardCurso from './CardCurso';
import cursoData from '../assets/curso';
import { RiStarFill } from 'react-icons/ri';
import Pagination from './Pagination';

export default function Curso() {
  const [cursos, setCursos] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    setCursos(cursoData);
  }, []);

  return (
    <div className="bg-slate-100">
      <div className="max-w-[85rem] px-8 py-14 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl md:leading-tight dark:text-white">
            Cursos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-10 lg:gap-x-24">
          {/* Renderização dinâmica dos componentes CardPercurso */}
          {cursos.map((curso, index) => (
            <div key={index}>
              <CardCurso
                title={curso.title}
                description={curso.description}
                image={curso.image}
              />
            </div>
          ))}
        </div>
        <div className="pt-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

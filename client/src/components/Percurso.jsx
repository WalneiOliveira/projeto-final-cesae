import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import CardPercurso from './CardPercurso';
import percursoData from '../assets/percurso';

export default function Percurso() {
  const [percursos, setPercursos] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    setPercursos(percursoData);
  }, []);

  const handleMoveRight = () => {
    if (currentPosition < percursos.length - 1) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setCurrentPosition(0); // Reiniciar a posição ao chegar ao último card
    }
  };

  const handleMoveLeft = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(percursos.length - 1); // Voltar ao último card quando estiver no primeiro
    }
  };

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-3xl font-bold md:text-4x lg:text-5xl md:leading-tight dark:text-white">
            Conheça os nossos Percursos
          </h2>
        </div>

        <div className="w-full flex flex-nowrap overflow-x-auto overflow-hidden gap-4 md:gap-4">
          {/* Renderização dinâmica dos componentes CardPercurso */}
          {percursos.map((percurso, index) => (
            <div
              key={index}
              style={{ transform: `translateX(-${currentPosition * 104}%)` }}
            >
              <CardPercurso
                title={percurso.title}
                description={percurso.description}
                image={percurso.image}
              />
            </div>
          ))}
        </div>
        <div className=" hidden md:flex justify-end w-full">
          <div className="w-24 md:flex justify-between items-center mt-4">
            <div
              className="flex justify-center items-center border-2 size-10 rounded-lg "
              onClick={handleMoveLeft}
            >
              <FiChevronLeft className="text-2xl text-gray-400" />
            </div>
            <div
              className="flex justify-center items-center border-2 size-10 rounded-lg "
              onClick={handleMoveRight}
            >
              <FiChevronRight className="text-2xl text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

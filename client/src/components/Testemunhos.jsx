import { useEffect, useState } from 'react';
import CardTestemunhos from './CardTestemunhos.jsx';
import testemunhosData from '../assets/testemunhos.js';

export default function Testemunhos() {
  const [testemunhos, setTestemunhos] = useState([]);

  useEffect(() => {
    setTestemunhos(testemunhosData);
  }, []);

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-3xl font-bold md:text-4x lg:text-5xl md:leading-tight dark:text-white">
            Testemunhos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 ">
          {/* Renderização dinâmica dos componentes CardPercurso */}
          {testemunhos.map((testemunho, index) => (
            <CardTestemunhos
              key={index}
              image={testemunho.image}
              name={testemunho.name}
              description={testemunho.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

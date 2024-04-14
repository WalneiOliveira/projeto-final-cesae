import { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import CardArtigo from './CardArtigo';
import artigoData from '../assets/artigo';
import { Link } from 'react-router-dom';

export default function Artigos() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    setArtigos(artigoData);
  }, []);

  return (
    <div className="max-w-[85rem] px-4 py-10 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-slate-900 text-3xl font-bold md:text-4xl lg:text-5xl md:leading-tight dark:text-white">
            Últimos Artigos
          </h2>
        </div>

        <div className="grid grid-col-1 md:grid-cols-3 gap-4 md:gap-20">
          {/* Renderização dinâmica dos componentes CardPercurso */}
          {artigos.map((artigo, index) => (
            <CardArtigo
              key={index}
              title={artigo.title}
              date={artigo.date}
              description={artigo.description}
              image={artigo.image}
              alt={artigo.alt}
            />
          ))}
        </div>

        <div className="mt-8 flex w-full justify-end ">
          <Link
            to="/blog"
            className="text-blue-600 py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Ver mais artigos
            <FiChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

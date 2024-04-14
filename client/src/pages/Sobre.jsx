import { FiUser } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Sobre = () => {
  return (
    <div>
      <Navbar />
      <div class="max-w-[85rem] px-4 py-2 sm:px-4 lg:px-8 lg:py-8 mx-auto">
        <div class="px-4 mx-auto max-w-7xl sm:px-4 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h1 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
              Informações do Projeto
            </h1>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Plataforma de disponibilização de cursos online para formandos,
              colaboradores do CESAE Digital e público em geral
            </p>
          </div>

          <ul class="max-w-md mx-auto mt-12 space-y-12">
            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-black">Equipa</h3>
                <p class="mt-4 text-base text-gray-600">Aline Bianca Souza</p>
                <p class=" text-sm text-gray-600">
                  Team Leader | Design | Front-End
                </p>
                <p class="mt-4 text-base text-gray-600">
                  Ana Gabriela Sant'Ana
                </p>
                <p class="text-sm text-gray-600">Design | Front-End</p>
                <p class="mt-4 text-base text-gray-600">
                  Cristina Andrade Grosso
                </p>
                <p class="text-sm text-gray-600">Design | Front-End</p>
                <p class="mt-4 text-base text-gray-600">
                  Walnei Oliveira Assis
                </p>
                <p class="text-sm text-gray-600">
                  Design | Front-End | Back-End
                </p>
              </div>
            </li>

            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-black">Tecnologias</h3>
                <p class="mt-4 text-base text-gray-600">
                  Metodologia Agile: Scrum, ferramenta Trello
                </p>
                <p class="mt-4 text-base text-gray-600">
                  Design: Figma, Preline
                </p>
                <p class="mt-4 text-base text-gray-600">
                  Desenvolvimento: React, Tailwind, Preline, NodeJS, Express,
                  Axios, MySQL
                </p>
              </div>
            </li>

            <li class="relative flex items-start">
              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                <svg
                  class="w-10 h-10 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-black">Insights</h3>
                <p class="mt-4 text-base text-gray-600 mb-14">
                  Projeto desafiador e enriquecedor para a equipa. Oportunidade
                  de aprendizado e prática de novas tecnologias.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sobre;

import { FiPhone } from 'react-icons/fi';
import { FaTwitter, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="bg-cesae-blue w-full">
        <div className="w-full max-w-[85rem] p-6 sm:p-12 lg:p-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div>
                <img src="/images/logo-white.svg" alt="CESAE Logo" />
              </div>

              <div className="md:order-last md:mt-4">
                <div className="flex-none text-sm font-medium text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Siga-nos
                </div>

                <div className="flex col-span-1 gap-x-5 mt-2">
                  <div aria-label="Twitter">
                    <FaTwitter className="text-base text-white/80 hover:text-white transition duration-300 hover:scale-125" />
                  </div>

                  <div aria-label="YouTube">
                    <FaYoutube className="text-base text-white/80 hover:text-white transition duration-300 hover:scale-125" />
                  </div>

                  <div aria-label="Instagram">
                    <FaInstagram className="text-base text-white/80 hover:text-white transition duration-300 hover:scale-125" />
                  </div>

                  <div aria-label="GitHub">
                    <FaGithub className="text-base text-white/80 hover:text-white transition duration-300 hover:scale-125" />
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-4">
                <h4 className="text-sm font-medium text-white">Contacto</h4>
                <span className="flex mt-2 gap-x-3 items-center text-sm font-medium text-white">
                  <FiPhone />
                  226 195 200
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3">
              <div className="col-span-1">
                <h4 className="text-sm font-semibold text-white uppercase">
                  Formações
                </h4>

                <div className="mt-3 grid space-y-3">
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Cursos
                    </span>
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Formações
                    </span>
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Qualificação
                    </span>
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Exames
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-span-1">
                <h4 className="text-sm font-semibold text-white uppercase">
                  Locais
                </h4>

                <div className="mt-3 grid space-y-3">
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Aveiro
                    </span>
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Lisboa
                    </span>
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Porto
                    </span>{' '}
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Braga
                    </span>
                  </p>
                </div>
              </div>

              <div className="hidden sm:block col-span-1">
                <h4 className="text-sm font-semibold text-white uppercase">
                  Links Úteis
                </h4>

                <div className="mt-3 grid space-y-3">
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Livro de Reclamações
                    </span>
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Estágios
                    </span>
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Política de Privacidade
                    </span>{' '}
                  </p>
                  <p>
                    <span className="inline-flex gap-x-2 text-white/90 hover:text-white text-sm font-regular dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Política de Dados
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-center mt-10 sm:mt-12 justify-center gap-x-1">
            <span className="text-xs font-light text-white/90 text-center">
              Copyright © 2024 CESAE Digital
            </span>

            <span className="hidden sm:block text-xs font-light text-white/80 text-center">
              |
            </span>

            <span className="text-xs font-light text-white/90 text-center">
              Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

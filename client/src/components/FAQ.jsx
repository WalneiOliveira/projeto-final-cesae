import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <div>
      {/* <!-- FAQ --> */}
      <div className="max-w-[85rem] px-8 py-14 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-3xl font-bold text-center md:text-start md:text-4x lg:text-5xl md:leading-tight dark:text-white">
                Perguntas Frequentes
              </h2>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div className="md:col-span-3">
            {/* <!-- Accordion --> */}
            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  className={`hs-accordion pt-6 pb-3 ${
                    activeAccordion === index ? 'active' : ''
                  }`}
                  id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                  key={index}
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-bold text-start text-gray-800 rounded-lg transition dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {index === 1 && 'Quando posso iniciar o curso?'}
                    {index === 2 &&
                      'Posso mudar de curso no decorrer da formação?'}
                    {index === 3 && 'A formação gera certificação?'}
                    {index === 4 &&
                      'Em quanto tempo tenho que concluir a formação?'}
                    {index === 5 &&
                      'A quem posso recorrer para problemas técnicos?'}
                    {index === 6 &&
                      'Caso o curso seja pago tenho direito a reembolso?'}
                    {index === 7 &&
                      'Posso usar as formações no meu Passaporte Qualifica?'}
                    {index === 8 &&
                      'Tenho descontos para compras de grupos de cursos?'}
                    {activeAccordion === index ? (
                      <FiMinus className="block flex-shrink-0 size-5 text-gray-600" />
                    ) : (
                      <FiPlus className="block flex-shrink-0 size-5 text-gray-600" />
                    )}
                  </button>
                  <div
                    id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                    className={`hs-accordion-content ${
                      activeAccordion === index ? 'block' : 'hidden'
                    } w-full overflow-hidden  transition duration-300 `}
                    aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                  >
                    <p className="text-base font-medium mt-1 text-gray-500">
                      {index === 1 &&
                        'O curso estará disponível para início a partir da validação dos documentos por parte do Cesae.'}
                      {index === 2 &&
                        'Caso o formando queira ele pode mudar de curso no decorrer da formação e optar por um outro tema de seu interesse.'}
                      {index === 3 &&
                        'Sim ao finalizar a formação o formando terá acesso ao seu certificado desde que tenha assistido a pelo menos 80% do conteúdo.'}
                      {index === 4 && 'Resposta.'}
                      {index === 5 && 'Resposta.'}
                      {index === 6 && 'Resposta.'}
                      {index === 7 && 'Resposta.'}
                      {index === 8 && 'Resposta.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* <!-- End Accordion --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End FAQ --> */}
    </div>
  );
}

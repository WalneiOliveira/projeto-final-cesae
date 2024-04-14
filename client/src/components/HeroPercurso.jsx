import CTA from './CTA';

export default function HeroPercurso() {
  return (
    // <!-- Grid -->
    <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-8 mx-auto">
      <div className="space-y-5 md:space-y-8">
        <div class="relative w-full">
          <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('../images/percurso2.jpeg')] bg-no-repeat bg-center bg-cover rounded-xl"></div>
        </div>

        <div className="max-w-2xl text-center mx-auto">
          <h1 className="block text-3xl font-bold text-gray-800 dark:text-gray-200 md:text-4xl lg:text-5xl mb-2">
            Front-End
          </h1>
        </div>
        <div>
          <p className="text-base md:text-2xl sm:mx-16 md:mx-20  text-gray-500 dark:text-gray-400">
            Torna-te um programador Front-End e aprende a criar as tuas próprias
            aplicações Web, com HTML5, CSS, JS e mais! Descobre o mundo do
            Front-End através de formações completas com diversos projetos para
            enriquecer o teu portfólio.
          </p>
        </div>
      </div>
    </div>
  );
}

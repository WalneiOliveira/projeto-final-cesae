import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';

export default function Hero() {
  const btnText = 'Inscreve-te Agora';
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <Modal modalOpen={modalOpen} closeModal={closeModal} />
        <div className="grid sm:grid-cols-2 sm:items-center gap-8">
          <div className="sm:order-2 group overflow-hidden rounded-xl">
            <div className="relative pt-[50%] sm:pt-[100%]">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full  absolute top-0 start-0 object-cover  rounded-xl"
                src="/images/hero.png"
                alt="Hero Image"
              />
            </div>
          </div>

          <div className="sm:order-1">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight lg:max-w-[600px] text-gray-800 dark:text-gray-200">
              Só vai longe quem está disposto a ousar mudar o futuro 
            </h1>
            <p className="max-w-md mt-3 text-lg text-gray-500 dark:text-gray-400">
              Desbloqueia o teu potencial com os nossos cursos de formação e vai
              mais além!
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Button onClick={openModal} text={btnText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

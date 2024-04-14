import { useState } from 'react';
import Modal from './Modal';
import Button from './Button';

export default function CTA() {
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
      <div className="bg-cesae-blue">
        <div className=" from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <Modal modalOpen={modalOpen} closeModal={closeModal} />
            <div className="flex justify-center"></div>
            {/* <!-- Title --> */}
            <div className="max-w-2xl text-center mx-auto ">
              <h1 className="block font-semibold text-gray-200 text-3xl md:text-4xl lg:text-5xl">
                Faz uma das nossas formações e eleva o teu potencial.
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div className="max-w-3xl  text-center mx-auto">
              <p className="text-md text-gray-300">
                Inscreve-te num percurso que mais se adapte aos teus interesses.
              </p>
            </div>

            {/* <!-- Buttons --> */}
            <div className="text-center">
              <Button onClick={openModal} text={btnText} />
            </div>
            {/* <!-- End Buttons --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </div>
  );
}

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FiXCircle } from 'react-icons/fi';

const Modal = ({ modalOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting},
    reset,

  } = useForm({
    defaultValues: {
      name: '',
      gender: '',
      birthDate: '',
      education: '',
      nif: '',
      email: '',
      address: '',
      phone: '',
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:8800/form', data);
      closeModal();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex md:items-center md:justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="fixed inset-0 bg-black bg-opacity-70 "></div>
          <div className="relative max-w-screen-sm mx-auto my-6">
            {/* Conteúdo do modal */}
            <div className="relative flex flex-col w-full bg-white border-2 border-gray-300 rounded-lg shadow-lg outline-none focus:outline-none">
              {/* Cabeçalho do modal */}
              <div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-gray-300">
                <h3 id="modal-title" className="text-lg font-semibold">
                  Formulário de Inscrição
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="text-gray-400 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <FiXCircle />
                  </span>
                </button>
              </div>
              {/* Corpo do modal */}
              <div className="relative flex-auto p-6">
                {/* Formulário */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col md:flex-row md:gap-10 rounded-xl p-2 md:p-4 lg:p-8">
                    <div className="w-full">
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-bold text-gray-700"
                        >
                          Nome Completo*
                        </label>
                        <input
                          type="text"
                          {...register('name', {
                            required: 'Este campo é obrigatório',
                            minLength: {
                              value: 3,
                              message: 'Digite um nome válido',
                            },
                          })}
                          placeholder="Digite seu nome"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.name && (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-bold text-gray-700"
                        >
                          Género
                        </label>
                        <select
                          {...register('gender')}
                          className="py-3 px-4 mb-2 block w-full border border-gray-200 rounded-lg text-sm text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        >
                          <option value="" defaultValue>
                            Escolha o Género
                          </option>
                          <option value="feminino">Feminino</option>
                          <option value="masculino">Masculino</option>
                          <option value="não informado">
                           Outro
                          </option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="birthDate"
                          className="block mb-2 text-sm font-bold text-gray-700"
                        >
                          Data de Nascimento*
                        </label>
                        <input
                          type="date"
                          {...register('birthDate', {
                            required: 'Este campo é obrigatório',
                          })}
                          placeholder="Digite sua data de nascimento"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.birthDate && (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.birthDate.message}
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="education"
                          className="block mb-2 text-sm font-bold text-gray-700"
                        >
                          Escolaridade
                        </label>
                        <select
                          {...register('education')}
                          className="py-3 px-4 mb-2 block w-full border border-gray-200 rounded-lg text-sm text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        >
                          <option value="" defaultValue>
                            Escolha a Escolaridade
                          </option>
                          <option>Básico</option>
                          <option>Secundário</option>
                          <option>Superior</option>
                          <option>Mestrado</option>
                          <option>Doutoramento</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="mb-4">
                        <label
                          htmlFor="nif"
                          className="block mb-2 text-sm font-bold text-gray-700"
                        >
                          NIF*
                        </label>
                        <input
                          type="text"
                          {...register('nif', {
                            required: 'Este campo é obrigatório',
                            minLength: {
                              value: 9,
                              message: 'O NIF deve ter 9 dígitos',
                            },
                            maxLength: {
                              value: 9,
                              message: 'O NIF deve ter 9 dígitos',
                            },
                          })}
                          placeholder="Digite seu NIF"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.nif && (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.nif.message}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-bold text-gray-700"
                        >
                          Email*
                        </label>
                        <input
                          type="text"
                          {...register('email', {
                            required: 'Este campo é obrigatório',
                            validate: (value) => {
                              if (!value.includes('@')) {
                                return "Email precisa incluir '@'";
                              }
                              return true;
                            },
                          })}
                          placeholder="Digite seu email"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        {errors.email && (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="address"
                          className="block mb-2 text-sm font-bold text-gray-700"
                        >
                          Morada
                        </label>
                        <input
                          type="text"
                          {...register('address')}
                          placeholder="Digite sua morada"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-bold text-gray-700"
                        >
                          Tel. de Contacto
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="Digite seu telefone"
                          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-start">
                    <div className="flex ">
                      <input
                        {...register('terms', {
                          required: 'Aceita os termos e condições',
                        })}
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 checked:bg-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ms-3">
                      <label
                        htmlFor="privacy-policy"
                        className="text-sm dark:text-white "
                      >
                        Aceito os{' '}
                        <a
                          className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#!"
                        >
                          Termos e condições e{' '}
                        </a>
                        <a
                          className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#!"
                        >
                          Políticas de Privacidade
                        </a>
                      </label>
                      {errors.terms && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.terms.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 w-full md:w-64 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      {isSubmitting ? 'Loading...' : 'Enviar'}
                    </button>
                  </div>
                  {/* <!-- End Checkbox --> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

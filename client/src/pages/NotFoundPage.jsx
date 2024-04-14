import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto h-screen">
        <div>
          <h1 className="block text-7xl font-bold text-gray-700 md:text-9xl dark:text-white text-center">
            404
          </h1>
          <p className="my-3 text-gray-600 dark:text-gray-400 text-center text-3xl">
            Oops, <span className=''>😥</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Esta página não existe.
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              <FiChevronLeft />
              voltar para Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

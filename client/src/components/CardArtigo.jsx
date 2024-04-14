import { FiChevronRight } from 'react-icons/fi';

const CardArtigo = ({ title, date, description, image, alt }) => {
  return (
    <div>
      <a
        className="group flex flex-col h-full justify-between border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-2xl p-3 lg:p-4 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href="#"
      >
        <div className="relative aspect-w-14 aspect-h-11">
          <img
            className="w-full object-cover rounded-t-xl"
            src={image}
            alt={alt}
          />
        </div>

        <div className="my-2 grow">
          <p className="uppercase text-sm font-semibold text-gray-600">
            {date}
          </p>
          <h3 className="my-2 text-xl font-semibold text-slate-900 dark:text-gray-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="my-2 text-base font-medium text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default CardArtigo;

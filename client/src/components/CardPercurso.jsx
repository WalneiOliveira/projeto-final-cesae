import { Link } from 'react-router-dom';
import Button from './Button';

const CardPercurso = ({ title, description, image }) => {
  return (
    <div>
      <div className="min-w-80 h-full flex flex-col justify-between bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] ">
        <img className="w-full h-48 object-cover rounded-t-xl" src={image} />
        <div className="p-4 md:p-5 flex flex-col justify-between gap-4">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-gray-500 dark:text-gray-400">{description}</p>

          <Link to="/percursos">
            <Button text="Informa-te mais" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPercurso;

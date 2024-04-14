import Button from './Button';
import { RiStarFill } from 'react-icons/ri';


const CardCurso = ({ title, description, image, }) => {
  return (
    <div>
      <div class="min-h-40 lg:min-h-80 grid grid-cols-12 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="col-span-5 bg-white border-r rounded-t-lg rounded-l-lg">
          <div className='flex justify-center items-center h-full'>
            <img class="h-32 object-cover" src={image} />
          </div>
          
        </div>
        
        <div className="col-span-7 p-4 md:p-8 flex flex-col h-full justify-between">
          <h3 class="text-xl pb-2 font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p class="text-sm md:text-base justify-self-start self-start text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="flex items-center py-4">
            <RiStarFill className="text-cesae-star" />
            <RiStarFill className="text-cesae-star" />
            <RiStarFill className="text-cesae-star" />
            <RiStarFill className="text-cesae-star" />
            <RiStarFill className="text-gray-400" />
          </div>

          <Button
            text="Ver Curso"
            hasIcon={false}
            className="self-end justify-self-end"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCurso;

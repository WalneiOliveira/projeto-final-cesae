const CardTestemunhos = ({ image, name, description }) => {
  return (
    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
      <div className="flex items-top gap-x-2">
        <img className="rounded-full size-12" src={image} alt="Image Description" />
        <div className="grow">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            {name}
          </h3>
          <p className="text-base font-medium mt-1 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTestemunhos;

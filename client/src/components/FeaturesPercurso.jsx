const FeaturesPercurso = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="min-h-64 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center gap-12 text-gray-600">
          <div className="flex flex-col items-center">
            <img src="../images/calendar.svg" alt="" />
            <p className="max-w-40 text-center pt-2">
              {' '}
              Acesso completo durante 1 ano{' '}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="../images/book-open.svg" alt="" />
            <p className="max-w-40 text-center pt-2">
              {' '}
              Estude 24h/dia onde e quando quiser{' '}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="../images/rotate.svg" alt="" />
            <p className="max-w-40 text-center pt-2">
              {' '}
              Novos cursos todas as semanas{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPercurso;

import React from 'react';

const Features = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div className="min-h-64 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 items-center justify-center gap-12 ">
          <div className="mx-auto">
            <img src="/images/angular.svg" alt="angular" />
          </div>
          <div className="mx-auto">
            <img src="/images/react.svg" alt="angular" />
          </div>
          <div className="mx-auto">
            <img src="/images/apple.svg" alt="angular" />
          </div>
          <div className="mx-auto">
            <img src="/images/bootstrap.svg" alt="angular" />
          </div>
          <div className="mx-auto">
            <img src="/images/tailwind.svg" alt="angular" />
          </div>
          <div className="mx-auto">
            <img src="/images/github.svg" alt="angular" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

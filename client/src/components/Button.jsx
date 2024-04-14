import { FiChevronRight } from 'react-icons/fi';

const Button = ({ text, onClick }) => {
  const style = `py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`;

  return (
    <button className={style} onClick={onClick}>
      {text}
      <FiChevronRight />
    </button>
  );
};

export default Button;

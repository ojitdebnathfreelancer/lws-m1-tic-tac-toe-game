/* eslint-disable react/prop-types */
const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      type="button"
      className="bg-white border font-bold border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
};

export default Square;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputProps } from "./types";

const InputWithButton = ({ icon, id, ...inputProps }: InputProps) => (
  <div className="relative flex items-center content-center overflow-hidden rounded-md focus-within:ring focus-within:ring-indigo-500 transition">
    <input
      className="w-11/12 px-3 py-1.5 text-gray-500 focus:text-gray-700 focus:outline-none"
      name={id}
      {...inputProps}
    />

    <button
      className="absolute right-0 flex items-center h-full px-8 py-2 font-bold text-white bg-indigo-600 rounded-r-md hover:bg-indigo-700 transition-colors"
      type="submit"
    >
      <FontAwesomeIcon icon={icon} className="absolute right-0 w-full h-2/4" />
    </button>
  </div>
);

export default InputWithButton;

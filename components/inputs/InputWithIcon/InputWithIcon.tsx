import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler } from "react";

interface InputWithIconProps {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  icon: IconProp;
  placeholder?: string;
  id?: string;
  type?: string;
}

const InputWithIcon = (props: InputWithIconProps) => {
  const { icon, ...inputProps } = props;

  return (
    <div className="relative flex items-center content-center px-2 overflow-hidden bg-white border border-gray-400 rounded-lg focus-within:ring focus-within:ring-indigo-500 transition">
      <input
        className="w-full py-1.5 text-neutral-800 focus:text-neutral-900 focus:outline-none"
        {...inputProps}
      />
      <FontAwesomeIcon icon={icon} className="w-4 text-slate-800" />
    </div>
  );
};
export default InputWithIcon;
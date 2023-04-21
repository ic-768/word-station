import { ChangeEventHandler } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import InputWithIcon from "../../common/inputs/InputWithIcon";

interface CredentialPanelProps {
  label: string;
  id: string;
  text: string;
  setText: ChangeEventHandler<HTMLInputElement>;
  icon: IconProp;
}

const CredentialPanel = ({
  label,
  id,
  text,
  setText,
  icon,
}: CredentialPanelProps) => (
  <div className="flex flex-col p-8 border border-teal-600 rounded-lg shadow-sm bg-neutral-900 shadow-cyan-600/50 focus-within:shadow-emerald-500/50 focus-within:shadow-md transition-all">
    <label className="text-lg" htmlFor={id}>
      {label}
    </label>
    <InputWithIcon id={id} text={text} setText={setText} icon={icon} />
  </div>
);
export default CredentialPanel;
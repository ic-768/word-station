import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ChangeEventHandler } from "react";

import { InputWithButton } from "components";

/*
 * Input with button to filter user words
 */
export interface WordFilterProps {
  filter: string;
  onChangeFilter: ChangeEventHandler<HTMLInputElement>;
}
const WordFilter = ({ filter, onChangeFilter }: WordFilterProps) => (
  <div className="flex flex-col">
    <label>Filter words</label>
    <InputWithButton
      placeholder="e.g. surreptitious"
      text={filter}
      onChange={onChangeFilter}
      id="input"
      icon={faMagnifyingGlass}
    />
  </div>
);

export default WordFilter;

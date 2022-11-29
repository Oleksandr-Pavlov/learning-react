import { Colorpicker } from "./Colorpicker/Colorpicker";
import { Counter } from "./Counter/Counter";
import { Dropdown } from "./Dropdown/Dropdown";
import colors from '../data/colors.json'

export const App = () => {
  return (
    <>
      <Counter initialValue={5} />
      <Dropdown />
      <Colorpicker options={colors} />
    </>
  );
};

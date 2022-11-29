import { Counter } from "./Counter/Counter";

export const App = () => {
  return (
    <>
      <h1>Стани компонентів</h1>
      <Counter initialValue={5} />
    </>
  );
};

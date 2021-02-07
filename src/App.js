import "./styles.css";
import { useInput } from "./hooks/useInput";

const App = () => {
  const validateMaxLength = (value) => value.length <= 10;
  const name = useInput("Mr.", validateMaxLength);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;

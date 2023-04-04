import Example1 from "./components/Example1";
import "./styles.css";

export default function App() {
  const example1 = ["Aijan", "Dosbol", "Joldosh"];

  return (
    <div className="App">
      <Example1 items={example1} />
    </div>
  );
}

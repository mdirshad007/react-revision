import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Counter from "./classComponents/Counter/Counter";

function App() {
  return (
    <div className="App">
      <div className="px-10 py-20">
        <div className="max-w-5xl w-full mx-auto">
          <Accordion title="Hello click me" description={'Hello I am description'} />
          <Counter/>
        </div>
      </div>
    </div>
  );
}

export default App;

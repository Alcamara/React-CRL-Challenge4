import "./App.css";
import { Header } from "../Header/Header";
import { Benefits } from "../Benefits/Benefits";
import { MoreBenefits } from "../MoreBenefits/MoreBenefits";

function App() {
  return (
    <div className="App">
      <Header />
      <Benefits />
      <MoreBenefits />
    </div>
  );
}

export default App;

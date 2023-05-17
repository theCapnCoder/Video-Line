import Action from "./Blocks/Action";
import Advantage from "./Blocks/Advantage";
import Footer from "./Blocks/Footer";
import Main from "./Blocks/Main";
import Documentation from "./components/Documentation";

function App() {
  return (
    <div className="container">
      <Main />
      <Advantage />
      <Action />
      <Footer />
      <Documentation />
    </div>
  );
}

export default App;

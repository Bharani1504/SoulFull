import "./App.css"
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import Market from "./components/Market";
import Feature from "./components/Feature";
import Sponsers from "./components/Sponsers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Introduction/>
      <Hero/>
      <Market />
      <Feature/>
      <Sponsers/>
    </div>
  );
}

export default App;
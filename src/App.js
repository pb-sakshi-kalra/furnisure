import Selection from "./components/Selection";
import Banner from "./components/Banner";
import About from "./components/About";
import ProdcutDisplay from "./components/ProductDisplay";

function App() {
  return (
    <div className="App">
      <Banner />
      <Selection />
      <About />
      <ProdcutDisplay />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

function App() {
  const cardComponents = data.map((el) => {
    return <Card key={el.id} item={el} />;
    // return <Card key={el.id} {..el} />; // I can also do this
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-container">
        {cardComponents}
        {cardComponents}
      </div>
    </div>
  );
}

export default App;

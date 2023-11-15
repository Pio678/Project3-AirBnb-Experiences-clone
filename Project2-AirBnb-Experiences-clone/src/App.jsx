import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./css/normalize.css";
import "./css/style.css";

import cardImg1 from "./assets/card_img1.png";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Card cardImg={cardImg1} />
      </div>
    </>
  );
}

export default App;

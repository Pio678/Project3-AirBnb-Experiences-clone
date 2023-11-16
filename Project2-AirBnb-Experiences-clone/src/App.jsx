import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./css/normalize.css";
import "./css/style.css";
import cardData from "./assets/data";

function App() {
  const Cards = cardData.map((data) => {
    return (
      <Card
        key={data.id}
        cardImg={data.coverImg}
        experienceName={data.title}
        price={data.price}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        country={data.location}
        openSpots={data.openSpots}
        location={data.location}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">{Cards}</div>
    </>
  );
}

export default App;

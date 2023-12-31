import HeroImg from "../../public/hero_img.png";

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-img"
        src={HeroImg}
        alt="pictures of people cooking, dancing, playing music"
      />

      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;

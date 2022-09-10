import heroImage from "../assets/photo-grid.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="Hero">
      <img src={heroImage} alt="Experience" />
      <div className="hero--content">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;

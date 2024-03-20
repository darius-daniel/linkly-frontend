import Button from './Button';
import './styles/HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero">
      <h1 className="gradient-text">Shorten Your Looong Links :)</h1>
      <p className="desc-1">
        Linkly is an efficient easy-to-use URL shortening service that
        streamlines your
        <br />
        online experience
      </p>
      <form action="" method="post" className="btn-embed">
        <input
          type="text"
          name="link"
          id="link"
          placeholder="Enter the link here"
        />
        <Button className="btn btn-primary btn-pill" text="Shorten Now!" />
      </form>
      <p className="desc-2">
        You can create <span className="red-text">05</span> more links. Register
        Now to enjoy Unlimited usage
      </p>
    </div>
  );
}

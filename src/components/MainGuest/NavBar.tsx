import Logo from "./Logo";
import Button from "./Button";

export default function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <Logo />
        <div className="btn-group">
          <Button
            className="btn btn-pill btn-secondary sign-in"
            text="Login"
            href="/sign-in/"
          />
          <Button
            className="btn btn-pill btn-primary sign-up"
            text="Register Now"
            href="/sign-up/"
          />
        </div>
      </nav>
    </header>
  );
}

import airbnbLogo from "../assets/airbnb_logo.svg";

function Navbar() {
  return (
    <header className="header">
      <img className="header-logo" src={airbnbLogo} alt="airbnb logo"></img>
    </header>
  );
}

export default Navbar;

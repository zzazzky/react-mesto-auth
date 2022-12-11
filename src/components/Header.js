import logo from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header" aria-label="Место Россия">
      <img className="header__logo" src={logo} alt="Место Россия" />
    </header>
  );
}

export default Header;

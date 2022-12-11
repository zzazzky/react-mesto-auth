import logo from "../images/header__logo.svg";

function Header(props) {
  return (
    <header className="header" aria-label="Место Россия">
      <img className="header__logo" src={logo} alt="Место Россия" />
      <p className="header__text button">{props.text}</p>
    </header>
  );
}

export default Header;

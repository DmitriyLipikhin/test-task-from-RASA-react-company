import './header.scss';
import Logo from '../../../components/ui/logo/logo.jsx';

function Header() {
  return (
    <header>
        <div className="header__top-nav">
          <ul className="header__top-nav-list">
            <li className="header__top-nav-item"></li>
            <li className="header__top-nav-item"></li>
            <li className="header__top-nav-item"></li>
            <li className="header__top-nav-item"></li>
          </ul>
        </div>
        <div className="header__bottom-nav">
          <Logo />
        </div>
    </header>
  );
}

export default Header;
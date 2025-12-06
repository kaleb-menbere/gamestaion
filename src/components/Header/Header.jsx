import './Header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useAuth } from '../../contexts/AuthContext';
import { useState, useRef, useEffect } from 'react';

function Header() {
  const { t, toggleLanguage, currentLang } = useLanguage();
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mobileNavRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate('/login');
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both mobile nav and hamburger button
      if (
        isMobileMenuOpen &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    // Add event listener when mobile menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when mobile menu is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="nav-shell">
          {/* Left logo */}
          <div className="cap left-cap">
            <img src="/images/ethio_telecom_logo.svg" className="" alt="Ethio Telecom" />
          </div>

          <div className="mobile-top-bar mobile-top-bar-small">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `links home ${isActive ? 'active' : ''}`}
            >
              {t('home')}
            </NavLink>
            <button
              className="toggle-lang links"
              onClick={() => {
                toggleLanguage();
                closeMobileMenu();
              }}
            >
              {currentLang === 'en' ? 'አማርኛ' : 'English'}
            </button>
          </div>

          {/* Center navigation - Desktop */}
          <nav className="green-bar">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `links home ${isActive ? 'active' : ''}`}
            >
              {t('home')}
            </NavLink>
            <div className="dropdown">
              <span className="dropbtn links">{t('gameCategory')} ▾</span>
              <div className="dropdown-content">
                <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/adventure">{t('adventureGames')}</NavLink>
                <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/education">{t('educationGames')}</NavLink>
                <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/puzzle">{t('puzzleGames')}</NavLink>
                <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/reflex">{t('reflexGames')}</NavLink>
                <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/sports">{t('sportsGames')}</NavLink>
              </div>
            </div>
            <NavLink
              to="/my-account"
              className={({ isActive }) => `my-account links ${isActive ? 'active' : ''}`}
            >
              {t('myAccount')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `links ${isActive ? 'active' : ''}`}
            >
              {t('about')}
            </NavLink>
            <Link className="links logout" onClick={handleLogout}>{t('logout')}</Link>
            {/* Simplified Language Toggle Button */}
            <button
              className="toggle-lang links"
              onClick={toggleLanguage}
            >
              {currentLang === 'en' ? 'አማርኛ' : 'English'}
            </button>
          </nav>
        </div>
      </header>

      {/* Hamburger Row - Second Row */}
      <div className="hamburger-row">
        <button
          ref={hamburgerRef}
          className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <nav
          ref={mobileNavRef}
          className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        >
          {/* Mobile Dropdown Container */}
          <div className="mobile-dropdown-container">
            <button className="mobile-dropdown-btn" onClick={toggleMobileDropdown}>
              {t('gameCategory')} {isDropdownOpen ? '▴' : '▾'}
            </button>
            {/* Dropdown content now appears right below the button */}
            <div className={`mobile-dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
              <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/adventure" onClick={closeMobileMenu}>{t('adventureGames')}</NavLink>
              <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/education" onClick={closeMobileMenu}>{t('educationGames')}</NavLink>
              <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/puzzle" onClick={closeMobileMenu}>{t('puzzleGames')}</NavLink>
              <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/reflex" onClick={closeMobileMenu}>{t('reflexGames')}</NavLink>
              <NavLink className={({ isActive }) => `categorys ${isActive ? 'active' : ''}`} to="/category/sports" onClick={closeMobileMenu}>{t('sportsGames')}</NavLink>
            </div>
            <NavLink className={({ isActive }) => `mobile-dropdown-btn links my-account ${isActive ? 'active' : ''}`} to="/my-account" onClick={closeMobileMenu}>{t('myAccount')}</NavLink>
            <NavLink className={({ isActive }) => `mobile-dropdown-btn links ${isActive ? 'active' : ''}`} to="/about" onClick={closeMobileMenu}>{t('about')}</NavLink>
            <button className="mobile-dropdown-btn active  logout" onClick={() => { handleLogout(); closeMobileMenu(); }}>{t('logout')}</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
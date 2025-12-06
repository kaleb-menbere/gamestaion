import React from "react";
import "./Footer.css";
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; // phone icon

function Footer() {
  const { t } = useLanguage();
  const helpDeskNumber = "+251970305059"; // phone number in international format

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/terms" className="footer-link">
            {t('termsConditions')}
          </Link>
          <a href={`tel:${helpDeskNumber}`} className="footer-link">
            <FiPhone style={{ marginRight: "8px", verticalAlign: "middle" }} />
            {t('help')}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

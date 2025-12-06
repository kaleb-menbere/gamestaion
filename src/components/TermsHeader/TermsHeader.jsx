import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "./TermsHeader.css";

function TermsHeader() {
  const { currentLang, toggleLanguage } = useLanguage();

  return (
    <header className="terms-header">
      <div className="terms-header-container">
        <div className="terms-logo left">
          <img src="/images/ethio_telecom_logo.svg" alt="Ethio Telecom" className="terms-logo-img" />
        </div>
        <div className="terms-language-center">
          <button className="terms-lang-btn" onClick={toggleLanguage}>
            {currentLang === 'en' ? 'አማርኛ' : 'English'}
          </button>
        </div>
        <div className="terms-logo right">
          <img src="/images/kidopia-logo.png" alt="KIDOPIA" className="terms-logo-img" />
        </div>
      </div>
    </header>
  );
}

export default TermsHeader;

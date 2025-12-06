import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="terms-page">
      {/* Banner Section */}
      <div className="terms-banner">
        <h1>{t("termsTitle")}</h1>
        <p>{t("termsDescription")}</p>
      </div>

      {/* Introduction Section */}
      <div className="section-title2">{t("welcomeTitle")}</div>
      <div className="section-content">
        <p>{t("welcomeContent")}</p>
      </div>

      {/* User Registration Section */}
      <div className="section-title2">{t("userRegistrationTitle")}</div>
      <div className="section-content">
        <p>{t("userRegistrationContent")}</p>
      </div>

      {/* Subscription Details Section */}
      <div className="section-title2">{t("subscriptionTitle")}</div>
      <div className="section-content">
        <p>{t("subscriptionContent1")}</p>
        <p>{t("subscriptionContent2")}</p>
        <p><strong>{t("subscriptionPackages")}:</strong></p>
        <ul>
          <li>{t("dailyPackage")}</li>
          <li>{t("weeklyPackage")}</li>
          <li>{t("monthlyPackage")}</li>
        </ul>
        <p>{t("paymentInfo")}</p>
        <p><strong>{t("unsubscribeTitle")}:</strong></p>
        <ul>
          <li>{t("unsubscribeDaily")}</li>
          <li>{t("unsubscribeWeekly")}</li>
          <li>{t("unsubscribeMonthly")}</li>
        </ul>
      </div>

      {/* Technical Requirements Section */}
      <div className="section-title2">{t("technicalRequirementsTitle")}</div>
      <div className="section-content">
        <p>{t("technicalRequirementsContent1")}</p>
        <p>{t("technicalRequirementsContent2")}</p>
      </div>

      {/* Rule Changes Section */}
      <div className="section-title2">{t("ruleChangesTitle")}</div>
      <div className="section-content">
        <p>{t("ruleChangesContent")}</p>
      </div>

      {/* Contact Information Section */}
      <div className="section-title2">{t("contactInfoTitle")}</div>
      <div className="section-content">
        <p>{t("contactInfoContent")}</p>
      </div>

      {/* Closing Message */}
      <div className="section-content">
        <p style={{textAlign: 'center', fontWeight: 'bold', marginTop: '20px'}}>
          {t("closingMessage")}
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
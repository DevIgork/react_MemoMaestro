import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log(`Changing language to: ${lng}`);
    i18n.changeLanguage(lng);
  };

  return (
    <div className='language-swither'>
      <button className = "language-button" onClick={() => changeLanguage('en')}>English</button>
      <button className = "language-button" onClick={() => changeLanguage('uk')}>Українська</button>
    </div>
  );
};

export default LanguageSwitcher;

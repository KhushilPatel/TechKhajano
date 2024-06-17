// LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <LanguageButton onClick={() => changeLanguage('en')}>EN</LanguageButton>
      <LanguageButton onClick={() => changeLanguage('hi')}>HI</LanguageButton>
      <LanguageButton onClick={() => changeLanguage('gu')}>GU</LanguageButton>
    </div>
  );
};

export default LanguageSelector;

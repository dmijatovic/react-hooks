import React, {createContext, useContext, useState, Fragment} from 'react'
import {Button, Container, Title} from "../../helpers/Styled";
import en from '../07-use-context/translations/en'
import fr from '../07-use-context/translations/fr'
import sp from '../07-use-context/translations/sp'

const EN = 'EN';
const SP = 'SP';
const FR = 'FR';
const LanguageContext = createContext(EN);


export const Exercise7Solution = () => {
  const [language, setLanguage] = useState(EN);
  const changeLanguage = (lang) => {
    setLanguage(lang)
  };

  return (
    <LanguageContext.Provider value={{changeLanguage, language}}>
      <Main/>
    </LanguageContext.Provider>
  )
};

const useCustomTranlsate = () => {
  const context = useContext(LanguageContext);
  let choosenLanguage = en;
  if(context.language === FR){
    choosenLanguage = fr
  }
  if(context.language === SP){
    choosenLanguage =sp
  }

  return (key) => choosenLanguage[key]
};

const Main = () => {
  return (
    <Fragment>
      <Navbar/>
      <Container>
        <CenteredContent/>
        <DropdownLanguage/>
      </Container>
    </Fragment>
  )
};


const Navbar = () => {
  const t = useCustomTranlsate();
  return (
    <div>
      {t('title')}
    </div>
  )
};

const CenteredContent = () => {
  const t = useCustomTranlsate();
  return (
    <Fragment>
    <Title>{t('subtitle')}</Title>
    <Title>{t('description')}</Title>
    </Fragment>
  )
};

const DropdownLanguage = () => {
  const {changeLanguage} = useContext(LanguageContext);
  return (
    <Fragment>
      <Button onClick={() => changeLanguage(EN)}>EN</Button>
      <Button onClick={() => changeLanguage(FR)}>FR</Button>
      <Button onClick={() => changeLanguage(SP)}>SP</Button>
    </Fragment>
  )
};
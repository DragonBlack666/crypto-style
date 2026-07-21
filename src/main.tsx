import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/index';
import './styles.css';
import { DICTS, I18nContext, type LangCode } from './lib/i18n';

function Root() {
  const [lang, setLangState] = useState<LangCode>('ru');
  useEffect(() => {
    const saved = localStorage.getItem('cs_lang') as LangCode | null;
    if (saved && saved in DICTS) setLangState(saved);
  }, []);
  const setLang = (l: LangCode) => {
    setLangState(l); localStorage.setItem('cs_lang', l); document.documentElement.lang = l;
  };
  return <I18nContext.Provider value={{lang, setLang, t: DICTS[lang]}}><App /></I18nContext.Provider>;
}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><Root /></React.StrictMode>);

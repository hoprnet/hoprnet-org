import React, { useState, useEffect } from 'react';
import AOS from 'aos';

import I18nProvider from 'next-translate/I18nProvider';
import Router, { useRouter } from 'next/router';
import { insertScript, Loader } from '../components';

import 'aos/dist/aos.css';
import '../styles/main.scss';

export async function loadNamespaces(namespaces, lang) {
  let res = {};
  for (let ns of namespaces) {
    let oCurrent;
    const oDev = await import(`../locales/en/${ns}.json`)
      .then(m => m.default);
    try {
      oCurrent = await import(`../locales/${lang}/${ns}.json`)
      .then(m => m.default);
      verifyEntries(oDev, oCurrent);
      res[ns] = oCurrent;
    } catch (e) {
      console.log(`${lang} file of ${ns} doesn't exists`);
      res[ns] = oDev;
    }
  }

  return res;
}

const verifyEntries = (oDefault, oCurrent) => {
  for (let sKey in oDefault) {
    if (typeof oDefault[sKey] === 'string') {
      if (!oCurrent[sKey]) {
        oCurrent[sKey] = oDefault[sKey];
      }
    } else {
      if (oCurrent[sKey]) {
        verifyEntries(oDefault[sKey], oCurrent[sKey]);
      } else {
        oCurrent[sKey] = oDefault[sKey];
      }
    }
  }
};

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  Router.onRouteChangeStart = () => {
    setLoading(true);
  };

  Router.onRouteChangeComplete = () => {
    setLoading(false);
  };

  Router.onRouteChangeError = () => {
    setLoading(false);
  };

  const onFinishLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    window.addEventListener('load', onFinishLoading);

    // add fathom analytics
    const script = insertScript('https://panther.hoprnet.org/script.js');
    script.setAttribute('site', 'ZXTSKLDN');
    script.setAttribute('spa', 'auto');

    return () => window.removeEventListener('load', onFinishLoading);
  }, []);

  return (
    <I18nProvider lang={router.locale} namespaces={pageProps._ns}>
      <>
        {loading && <Loader />}
        <Component {...pageProps} setLoading={setLoading} />
      </>
    </I18nProvider>
  );
}

export default MyApp;

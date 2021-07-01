import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '../../hooks/translation';

export default function Welcome() {
  const [initialAni, setInitialAni] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setInitialAni(true);
    }, 400);
  }, []);

  return (
    <div className={'welcome-section invert-color ' + (initialAni ? 'show-hi' : '')}>
      <div className="section-top center-on-the-box container ">
        <div className="main-labels ">
          <h1>{t('home:welcome.title')}</h1>
          <div className="help-box">
            <p>{t('home:welcome.subTitle')}</p>
          </div>
        </div>
      </div>
      <div className="section-bottom">
        <Link href="/token">
          <a className="right-container center-on-the-box welcome welcome--left">
            <div className="text-area">
              <h2>{t('home:welcome.rightSection')}</h2>
            </div>
          </a>
        </Link>
        <Link href="/win">
          <a className="left-container center-on-the-box welcome welcome--right">
            <div className="text-area">
              <h2>{t('home:welcome.leftSection')}</h2>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

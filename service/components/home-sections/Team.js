import React from 'react';
import { useTranslation } from '../../hooks/translation';

export default function Team() {
  const { t } = useTranslation();

  return (
    <>
      <section className="section-team-header">
        <div className="container">
          <div className="container-sm sub-title">
            <h2>{t('home:team.title')}</h2>
          </div>
        </div>
      </section>
      <div className="section-team container the-aux-margin">
        <div className="container">
          <a href="/about-us#team-section">
            <img
              data-aos="fade-down"
              src="assets/icons/cards/team-card-with-blue-stroke.png"
              alt={t('home:team.title')}
            />
          </a>
        </div>
        <div>
          {t('home:team.paragraph')}
        </div>
      </div>
    </>
  );
}

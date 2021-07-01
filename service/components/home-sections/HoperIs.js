import React from 'react';
import { useTranslation } from '../../hooks/translation';

export default function HoperIs() {
  const { t } = useTranslation();

  const dataTop = [
    {
      title: 'home:hoperIs.enablingData.title',
      img: 'assets/icons/with-blue-stroke/common-file-lock.png',
      main: 'home:hoperIs.enablingData.main',
      delayTime: '100',
    },
    {
      title: 'home:hoperIs.openSource.title',
      img: 'assets/icons/with-blue-stroke/user-signal.png',
      main: 'home:hoperIs.openSource.main',
      delayTime: '150',
    },
  ];

  const dataBottom = [
    {
      forClient: 'home:hoperIs.personal.for',
      title: 'home:hoperIs.personal.title',
      img: 'assets/icons/with-blue-stroke/love-heart-keyhole.png',
      main: 'home:hoperIs.personal.main',
      delayTime: '200',
    },
    {
      forClient: 'home:hoperIs.professional.for',
      title: 'home:hoperIs.professional.title',
      img: 'assets/icons/with-blue-stroke/building-modern.png',
      main: 'home:hoperIs.professional.main',
      delayTime: '250',
    },
  ];

  return (
    <section className="section-UseCases change-bg-color the-aux-padding invert-color">
      <div className="container">
        <div
          className="container-sm sub-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
        >
          <h2>{t('home:hoperIs.title')}</h2>
        </div>

        <div className="items-list list-two-elements">
          {dataTop.map((e, index) => {
            const { title, main, img, delayTime } = e;
            return (
              <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={delayTime}
                className="element-item"
              >
                <div className="main">
                  <div className="container-img mb-12">
                    <img src={img} alt={t(title)} />
                  </div>

                  <div>
                    <h4>{t(title)}</h4>
                    <div className="list-text">
                      {t(main)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="container sub-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
        >
          <h2>{t('home:hoperIs.titleBottom')}</h2>
        </div>

        <div className="items-list list-two-elements">
          {dataBottom.map((e, index) => {
            const { forClient, title, main, img, delayTime } = e;
            return (
              <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={delayTime}
                className="element-item"
              >
                <div className="main">
                  <p>{t(forClient)}</p>
                  <div className="container-img mb-12">
                    <img src={img} alt={t(title)} />
                  </div>

                  <div>
                    <h4>{t(title)}</h4>
                    <div className="list-text" >
                      {t(main)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

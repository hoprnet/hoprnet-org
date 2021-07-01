import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const data = [
  {
    alt: 'home:news.coindesk.alt',
    link:
      'https://www.coindesk.com/binance-labs-leads-1m-seed-round-in-crypto-tor-alternative-hopr',
    img: 'assets/as_see/coindesk.svg',
    about: 'home:news.coindesk.about',
    btn: 'common:readMore',
    delayTime: '100',
  },
  {
    alt: 'home:news.coinTelegraph.alt',
    link:
      'https://cointelegraph.com/news/hopr-data-privacy-testnet-to-launch-following-investment-by-binance',
    img: 'assets/as_see/cointelegraph.svg',
    about: 'home:news.coinTelegraph.about',
    btn: 'common:readMore',
    delayTime: '150',
  },
  {
    alt: 'home.news.moneyToday.alt',
    link:
      'https://www.moneytoday.ch/news/das-schweizer-tech-startup-hopr-sammelt-1-million-dollar-ein-binance-labs-fuehrt-die-investitionsru/',
    img: 'assets/as_see/moneytoday.svg',
    about: 'home:news.moneyToday.about',
    btn: 'common:readMore',
    delayTime: '200',
  },
];

export default function News() {
  const { t } = useTranslation();
  return (
    <>
      <section className="section-InTheNews the-aux-margin container">
        <div
          className="container-sm sub-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
        >
          <h2>{t('home:news.title')}</h2>
        </div>
        <div className="items">
          {data.map((e, index) => {
            const { alt, link, img, about, btn, delayTime } = e;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delayTime}
                className="element-item"
              >
                <div className="main">
                  <a alt={alt} href={link} target="_blank" rel="noopener noreferrer">
                    <div className="container-img mb-12">
                      <img src={img} alt={about} />
                    </div>
                  </a>
                  <div>
                    <p className="mb-16 quote">{t(about)}</p>
                    <div>
                      <a
                        alt={alt}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-color-high underline"
                      >
                        {t(btn)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

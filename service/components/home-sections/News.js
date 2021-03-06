import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const data = [
  {
    alt: 'Coindesk',
    link:
      'https://www.coindesk.com/binance-labs-leads-1m-seed-round-in-crypto-tor-alternative-hopr',
    img: 'assets/as_see/coindesk.svg',
    about:
      'Binance Labs, the incubation and seed funding arm of the world’s largest crypto exchange, has made its first investment this year, backing decentralized privacy startup HOPR.',
    btn: 'Read more',
    delayTime: '100',
  },
  {
    alt: 'Coin Telegraph',
    link:
      'https://cointelegraph.com/news/hopr-data-privacy-testnet-to-launch-following-investment-by-binance',
    img: 'assets/as_see/cointelegraph.svg',
    about:
      'The privacy-focused network allows users to run HOPR nodes, stake and get rewards with HOPR tokens while providing privacy for Web 3.',
    btn: 'Read more',
    delayTime: '150',
  },
  {
    alt: 'Money Today',
    link:
      'https://www.moneytoday.ch/news/das-schweizer-tech-startup-hopr-sammelt-1-million-dollar-ein-binance-labs-fuehrt-die-investitionsru/',
    img: 'assets/as_see/moneytoday.svg',
    about:
      'From award-winning blockchain hackers, Silicon Valley tech veterans and a bold vision that could become a reality in Switzerland.',
    btn: 'Read more',
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
          <h2>In The News</h2>
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
                    <p className="mb-16 quote">{about}</p>
                    <div>
                      <a
                        alt={alt}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-color-high underline"
                      >
                        {btn}
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

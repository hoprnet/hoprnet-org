import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function HoperFor() {
  const { t } = useTranslation();
  const data = [
    {
      link: 'https://github.com/hoprnet',
      img: '/assets/icons/with-yellow-ball/shield.png',
      label: 'common:privacyBlog',
      delayTime: '100',
    },
    {
      link: 'https://github.com/hoprnet',
      img: '/assets/icons/with-yellow-ball/lock-4.png',
      label: 'common:cryptographers',
      delayTime: '150',
    },
    {
      link: 'https://github.com/hoprnet/hoprnet',
      img: '/assets/icons/with-yellow-ball/programming-team-chat-3.png',
      label: 'common:techies',
      delayTime: '200',
    },
    {
      link: '',
      img: '/assets/icons/with-yellow-ball/light-bulb-shine.png',
      label: 'common:entrepreneurs',
      delayTime: '250',
    },

    {
      link: 'http://docs.hoprnet.org/en/latest/src/install-hoprd/using-avado.html?highlight=node#installing-your-avado-node',
      img: '/assets/icons/with-yellow-ball/outdoors-mining.png',
      label: 'common:miners&Stakers',
      delayTime: '300',
    },
    {
      link: 'mailto:sebastian.buergel@hoprnet.org?subject=Investment',
      img: '/assets/icons/with-yellow-ball/professions-man-office-1.png',
      label: 'common:investors',
      delayTime: '350',
    },
  ];
  return (
    <div className=" container the-aux-margin">
      <div
        className="container sub-title"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
      >
        <h2 className="the-aux-margin">HOPR For</h2>
      </div>
      <div className=" list-items">
        {data.map((e, index) => {
          const { link, img, label, delayTime } = e;

          return (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={delayTime}
                className="item-contact-plus"
              >
                <div className="bg-img">
                  <img
                    alt={t(label)}
                    layout="fill"
                    src={img}
                  />
                </div>
                <div>
                  <h6 transition={{ delay: 0.2 }}>{t(label)}</h6>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

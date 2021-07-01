import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function Blogs() {
  const { t } = useTranslation();
  const data = [
    {
      link: '/blog#post-blog',
      img: 'assets/icons/with-yellow-ball/shield.png',
      label: 'common:privacyBlog',
      delayTime: '100',
    },
    {
      link: '/blog#post-blog',
      img: 'assets/icons/with-yellow-ball/lock-4.png',
      label: 'common:cryptoBlog',
      delayTime: '150',
    },
    {
      link: '/blog#post-blog',
      img: 'assets/icons/with-yellow-ball/programming-team-chat-3.png',
      label: 'common:techBlog',
      delayTime: '200',
    },
    {
      link: '/blog#post-blog',
      img: 'assets/icons/with-yellow-ball/light-bulb-shine.png',
      label: 'common:newsBlog',
      delayTime: '250',
    },
  ];

  return (
    <div className="container  the-aux-margin">
      <div
        className="container-sm sub-title"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
      >
        <h2 className="the-aux-margin">{t('home:blogs.title')}</h2>
      </div>
      <div className=" list-items helper-box-mob">
        {data.map((e, index) => {
          const { link, img, label, delayTime } = e;
          return (
            <a key={index} href={link} target="_blank" rel="noopener ">
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={delayTime}
                className="item-contact-plus"
              >
                <div className="bg-img">
                  <img src={img} alt={t(label)} />
                </div>
                <div>
                  <h6>{t(label)}</h6>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

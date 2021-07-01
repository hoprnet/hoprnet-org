import React from 'react';
import { BannerItem, SectionContainer } from '..';
import { useTranslation } from '../../hooks/translation';

const aVideos = [
  {
    title: 'jungfrauRel',
    video: 'https://vimeo.com/513101933',
    preview: 'https://i.vimeocdn.com/video/1064325853.webp',
  },
  {
    title: 'ourTeam',
    video: 'https://vimeo.com/513096259',
    preview: 'https://i.vimeocdn.com/video/1062368155.webp',
  },
  {
    title: 'hoprHardware',
    video: 'https://vimeo.com/513096240',
    preview: 'https://i.vimeocdn.com/video/1062367955.webp',
  },
  {
    title: 'whyJungfrau',
    video: 'https://vimeo.com/513096330',
    preview: 'https://i.vimeocdn.com/video/1062371659.webp',
  },
  {
    title: 'makingOf',
    video: 'https://vimeo.com/513096151',
    preview: 'https://i.vimeocdn.com/video/1064325388.webp',
  },
  {
    title: 'ourValues',
    video: 'https://vimeo.com/513096293',
    preview: 'https://i.vimeocdn.com/video/1062368114.webp',
  },
  {
    title: 'winTrip',
    video: 'https://vimeo.com/514633549',
    preview: 'https://i.vimeocdn.com/video/1065570649.webp',
  },
  {
    title: 'techDeep',
    video: 'https://vimeo.com/513105733',
    preview: 'https://i.vimeocdn.com/video/1062385601.webp',
  },
];

export const BannerGrid = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer extraClass="banners">
      <div className="banner-row">
        {aVideos.map(({ title, video, preview }, nIndex) => (
          <BannerItem
            blindText={t(title)}
            key={nIndex}
            preview={preview}
            video={video}
          />
        ))}
        <BannerItem
          alt={t('jungfrau:banner.downloadScreensaverAlt')}
          blindText={t('jungfrau:banner.downloadScreensaver')}
          link="https://assets.hoprnet.org/HOPR_Screensaver.mp4"
          src="/assets/images/win/win-banner-8.jpg"
        />
      </div>
    </SectionContainer>
  );
};

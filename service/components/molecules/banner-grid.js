import { set } from 'lodash';
import React, { useState } from 'react';
import { BannerItem, SectionContainer } from '..';

const aVideos = [
  {
    title: 'Jungfrau Release',
    video: 'https://player.vimeo.com/video/513101933',
  },
  {
    title: 'Our Team',
    video: 'https://player.vimeo.com/video/513096259',
  },
  {
    title: 'HOPR Hardware Node',
    video: 'https://player.vimeo.com/video/513096240',
  },
  {
    title: 'Why Jungfraujoch?',
    video: 'https://player.vimeo.com/video/513096330',
  },
  {
    title: 'Making of',
    video: 'https://player.vimeo.com/video/513096151',
  },
  {
    title: 'Our Values',
    video: 'https://player.vimeo.com/video/513096293',
  },
  {
    title: 'Tech Deepdive',
    video: 'https://player.vimeo.com/video/513105733',
  },
]

export const BannerGrid = () => {
  const [isPlaying, setPlay] = useState(-1);

  const onClickBanner = (nIndex) => {
    setPlay(isPlaying !== nIndex ? nIndex : -1);
  };

  return (
    <SectionContainer extraClass="banners">
      <div className="banner-row">
        {aVideos.map(({ title, video }, nIndex) => (
          <BannerItem
            blindText={title}
            height="273.88px"
            key={nIndex}
            onClick={() => onClickBanner(nIndex)}
            playing={nIndex === isPlaying ? 1 : 0}
            video={video}
            width="468px"
          />
        ))}
        <BannerItem
          alt="Download Screensaver"
          blindText="Download our Jungfraujoch-Screensaver"
          height="273.88px"
          link="https://assets.hoprnet.org/HOPR_Screensaver.mp4"
          src="/assets/images/win/win-banner-8.jpg"
          width="468px"
        />
      </div>
    </SectionContainer>
  );
};

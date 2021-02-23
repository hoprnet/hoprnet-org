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
    title: 'Win a Trip!',
    video: 'https://player.vimeo.com/video/514633549',
  },
  {
    title: 'Tech Deepdive',
    video: 'https://player.vimeo.com/video/513105733',
  },
];

export const BannerGrid = () => {
  return (
    <SectionContainer extraClass="banners">
      <div className="banner-row">
        {aVideos.map(({ title, video }, nIndex) => (
          <BannerItem
            blindText={title}
            height="273.88px"
            key={nIndex}
            video={video}
            width="468px"
          />
        ))}
        <BannerItem
          alt="Download Screensaver"
          blindText="Download our Jungfraujoch-Screensaver"
          link="https://assets.hoprnet.org/HOPR_Screensaver.mp4"
          src="/assets/images/win/win-banner-8.jpg"
          width="100%"
          height="100%"
        />
      </div>
    </SectionContainer>
  );
};

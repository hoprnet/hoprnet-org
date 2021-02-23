import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const BannerItem = ({
  alt,
  blindText,
  children,
  height,
  link,
  onClick,
  src,
  video: videoUrl,
  width,
}) => {
  const [isDesktop, setDesktop] = useState(true);
  const [showingControls, setShow] = useState(false);

  const setDeviceType = () => {
    if (window.innerWidth < 1024) {
      setDesktop(false);
    } else {
      setDesktop(true);
    }
  };

  useEffect(() => {
    setDeviceType();
  }, []);

  return (
    <div
      className="banner-element"
      onClick={onClick}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span>{blindText}</span>

      {children
        ? { children }
        : videoUrl
        ? renderVimeoVideo(
            `${videoUrl}?title=0&autoplay=0&byline=0&portrait=0&playsinline=0&loop=0&app_id=122963`,
            showingControls
          )
        : src
        ? renderDownloadVideo(link, () => (
            <img alt={alt} height={height} src={src} width={width} />
          ))
        : null}
    </div>
  );
};

const renderVimeoVideo = (src, showingControls) => {
  return (
    <div className="embed-container">
      <iframe
        hidden={showingControls}
        allowFullScreen
        allow="autoplay; fullscreen"
        className="video"
        frameBorder="0"
        src={`${src}&controls=0`}
      />
      <iframe
        hidden={!showingControls}
        allowFullScreen
        allow="autoplay; fullscreen"
        className="video"
        frameBorder="0"
        src={`${src}&controls=1`}
      />
    </div>
  );
};

const renderDownloadVideo = (link, ImgWrapper) => {
  return (
    <div>
      {link ? (
        <a href={link} download target="_blank">
          <ImgWrapper />
        </a>
      ) : (
        <ImgWrapper />
      )}
    </div>
  );
};

BannerItem.propTypes = {
  alt: PropTypes.string,
  blindText: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  playing: PropTypes.number,
  src: PropTypes.string,
  video: PropTypes.string,
  width: PropTypes.string,
};

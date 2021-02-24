import React from 'react';
import { Button, GameCountdown } from '..';

export const GameItem = ({
  answer,
  city,
  date,
  destination,
  hour,
  onClick,
  onFetch,
  setAnswer,
  to,
  video = 'https://player.vimeo.com/video/513096293',
  visible,
}) => {
  const changeVideo = () => {
    onFetch(city);
  };

  return (
    <>
      <div className="event-item" onClick={onClick}>
        <p>{destination}</p>
        <p>{hour}</p>
        <GameCountdown endDate={date} onFinish={changeVideo} />
      </div>
      {visible && (
        <div className="quiz">
          <iframe
            allowFullScreen
            className="quiz-video"
            frameBorder="0"
            src={`${video}?autoplay=0&loop=1&title=0&byline=0&portrait=0&muted=0&responsive=1&controls=1&app_id=122963`}
            width="100%"
          ></iframe>
          <div className="answer">
            <input
              onChange={({ target }) => setAnswer(target.value)}
              type="text"
              value={answer}
            />
            <Button
              content="Submit"
              target="_blank"
              to={to}
            />
          </div>
        </div>
      )}
    </>
  );
};

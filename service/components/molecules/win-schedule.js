import React, { useEffect, useState } from 'react';
import { GameItem, SectionContainer } from '..';

export const WinSchedules = () => {
  const isDebug = false;
  const [accordionVisible, setVisible] = useState(null);
  const [video, setVideo] = useState();
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    fetchVideo();
  }, []);

  useEffect(() => {
    setAnswer('');
  }, [accordionVisible]);

  const setItemVisible = index => {
    if (index !== accordionVisible) {
      setVisible(index);
    }
  };

  const fetchVideo = async (current) => {
    if (!isDebug) {
      const result = await fetch(
        'https://api.hoprnet.org/api/fetchVideo',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      if (result) {
        const oJson = await result.json();
        setVisible(oJson?.city);
        setVideo(`https://player.vimeo.com/video/${oJson.url?.split('/').reverse()[0]}`);
      }
    } else {
      setVisible(current);
    }
  };

  const aData = [
    {
      date: 'Feb 24, 2021 16:00:00 UTC+09:00',
      destination: 'Tokyo, JP',
      hour: '16:00 UTC+9',
      ht: 'Tokyo',
      video: 'TOKYO',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+09:00',
      destination: 'Seoul, KOR',
      hour: '17:00 UTC+9',
      ht: 'Seoul',
      video: 'SEOUL',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+08:00',
      destination: 'Shangai, CN',
      hour: '17:00 UTC+8',
      ht: 'Shangai',
      video: 'SHANGAI',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+07:00',
      destination: 'Hanoi, VN',
      hour: '17:00 UTC+7',
      ht: 'Hanoi',
      video: 'HANOI',
    },
    {
      date: 'Feb 24, 2021 14:00:00 UTC+03:00',
      destination: 'Moscow, RU',
      hour: '14:00 UTC+3',
      ht: 'Moscow',
      video: 'MOSCOW',
    },
    {
      date: 'Feb 24, 2021 15:00:00 UTC+03:00',
      destination: 'Istanbul, TR',
      hour: '15:00 UTC+3',
      ht: 'Istanbul',
      video: 'ISTANBUL',
    },
    {
      date: 'Feb 24, 2021 14:00:00 UTC+01:00',
      destination: 'Zurich, CH',
      hour: '14:00 UTC+1',
      ht: 'Zurich',
      video: 'ZURICH',
    },
    {
      date: 'Feb 24, 2021 15:00:00 UTC+01:00',
      destination: 'Madrid, ES',
      hour: '15:00 UTC+1',
      ht: 'Madrid',
      video: 'MADRID',
    },
    {
      date: 'Feb 24, 2021 12:00:00 UTC-03:00',
      destination: 'Sao Paulo, BR',
      hour: '12:00 UTC-3',
      ht: 'SaoPaolo',
      video: 'SAO_PAULO',
    },
    {
      date: 'Feb 24, 2021 12:00:00 UTC-09:00',
      destination: 'San Francisco, USA',
      hour: '12:00 UTC-9',
      ht: 'SF',
      video: 'SAN_FRANCISCO',
    },
  ];

  if (isDebug) {
    aData.push({
      date: 'Feb 24, 2021 00:10:00 UTC-06:00',
      destination: 'Test 001, MX',
      hour: '23:40 UTC-6',
      ht: 'SF',
      video: 'MX001',
    },
    {
      date: 'Feb 24, 2021 00:15:00 UTC-06:00',
      destination: 'Test 002, MX',
      hour: '23:45 UTC-6',
      ht: 'SF',
      video: 'MX002',
    },
    {
      date: 'Feb 24, 2021 00:20:00 UTC-06:00',
      destination: 'Test 003, MX',
      hour: '23:50 UTC-6',
      ht: 'SF',
      video: 'MX003',
    },
    {
      date: 'Feb 24, 2021 00:25:00 UTC-06:00',
      destination: 'Test 004, MX',
      hour: '23:55 UTC-6',
      ht: 'SF',
      video: 'MX004',
    },
    {
      date: 'Feb 24, 2021 00:30:00 UTC-06:00',
      destination: 'Test 005, MX',
      hour: '00:00 UTC-6',
      ht: 'SF',
      video: 'MX005',
    });
  }

  const getTwitterIntent = (sDestination) => {
    let sUrl = `https://twitter.com/intent/tweet?text=@hopnet It\'s $HOPR launch day! My answer is ${answer}&hashtags=${sDestination},HOPRLaunch`;
    return encodeURI(sUrl);
  };

  return (
    <SectionContainer extraClass="banners hours">
      {aData.map(oItem => (
        <GameItem
          answer={answer}
          date={oItem.date}
          destination={oItem.destination}
          hour={oItem.hour}
          key={oItem.video}
          city={oItem.video}
          onClick={() => setItemVisible(oItem.video)}
          onFetch={fetchVideo}
          setAnswer={setAnswer}
          to={getTwitterIntent(oItem.ht)}
          video={video}
          visible={accordionVisible === oItem.video}
        />
      ))}
    </SectionContainer>
  );
};

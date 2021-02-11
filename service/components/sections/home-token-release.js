import React, { useState, useEffect, forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Line, Pie } from 'react-chartjs-2';

import dataPie from '../../public/assets/json/data-token-allocation.json';
import dataSupply from '../../public/assets/json/data-supply.json';

function intlFormat(num) {
  return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
}

function makeFriendly(num) {
  if (num >= 1000000) {
    return intlFormat(num / 1000000) + 'M';
  }
  if (num >= 1000) {
    return intlFormat(num / 1000) + 'k';
  }
  return intlFormat(num);
}

const oLineDefaultOptions = {
  borderColor: '#fff',
  borderWidth: 2,
  pointBorderWidth: 0,
  lineTension: 0,
};

const HomeTokenRelease = forwardRef(({ start }, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (window.matchMedia('screen and (max-width: 797px)').matches) {
      setIsMobile(true);
    }
  }, []);

  const resultPie = Object.keys(dataPie).map((key) =>
    dataPie[key]
  );

  const allSumResultPie = resultPie.reduce((a, b) => a + b, 0);

  const percentagesPieItem = Object.keys(dataPie).map((key) =>
    (dataPie[key] / allSumResultPie) * 100
  );

  const labelsPie = [
    t('home:graphic.public'),
    t('home:graphic.cover'),
    t('home:graphic.bounties'),
    t('home:graphic.pre'),
    t('home:graphic.team'),
    t('home:graphic.treasury'),
  ];

  const matchLabelsPie = function (names, values) {
    const item = names.map((name, index) => {
      name = name + ': ' + values[index] + '%';
      return name;
    });
    return item;
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    animation: {
      duration: 9000,
    },

    tooltips: {
      bodyFontFamily: 'Source Code Pro',
      callbacks: {
        // eslint-disable-next-line no-shadow
        label: function (e, t) {
          let num = makeFriendly(t.datasets[0].data[e.index]);
          return (
            ' '
              .concat(t.labels[e.index].split(':')[0], ': ')
              .concat(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")) +
            ' HOPR'
          );
        },
      },
    },
    legend: {
      display: true,
      position: isMobile ? 'bottom' : 'right',
      responsive: false,
      maintainAspectRatio: false,

      labels: {
        fontFamily: 'Source Code Pro',
        fontSize: 16,
        fontColor: '#414141',
        padding: 18,
        boxWidth: 21,
        usePointStyle: false,
      },
    },
  };

  const data = {
    labels: matchLabelsPie(labelsPie, percentagesPieItem),
    datasets: [
      {
        label: t('home:graphic.votes'),
        data: start ? resultPie : '',
        backgroundColor: [
          '#FEFDAF',
          '#FEFDAF',
          '#C0F3FF',
          '#4B79B4',
          '#1423C1',
          '#060D62',
        ],
        hoverBackgroundColor: [
          '#FEFDAF',
          '#FEFDAF',
          '#C0F3FF',
          '#4B79B4',
          '#1423C1',
          '#060D62',
        ],
        hoverBorderColor: [
          '#878787',
          '#878787',
          '#878787',
          '#878787',
          '#878787',
          '#878787',
        ],
        hoverBorderWidth: 2,
        borderColor: '#E0E0E0',
        borderWidth: 2,
      },
    ],
  };

  const dataDate = dataSupply.map((item) => item.Date);
  const processData = (key) =>
    dataSupply.map(oItem => {
        let nElem = oItem[key];

        return nElem ? parseFloat(nElem.split(',').join('').trim()) : undefined;
      });

  const dataOption = {
    maintainAspectRatio: false,
    responsive: true,

    elements: {
      point: {
        radius: 0,
        borderWidth: 0,
      },
    },
    animation: {
      duration: 9000,
    },

    tooltips: {
      mode: 'x-axis',
      bodyFontFamily: 'Source Code Pro',
      callbacks: {
        label: function (e, t) {
          let num = makeFriendly(e.yLabel);
          return ''
            .concat('  ', t.legend[e.datasetIndex], ': ')
            .concat(
              num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'"),
              ' HOPR'
            );
        },
      },
    },

    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          stacked: !0,
          beginAtZero: true,
          ticks: {
            fontFamily: 'Source Code Pro',
            fontSize: 14,
            fontColor: '#414141',
            padding: 18,
            max: 1000000000,
            min: 0.0,
            stepSize: 250000000,

            callback: function (value) {
              return makeFriendly(value);
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },

          ticks: {
            fontFamily: 'Source Code Pro',
            fontSize: 14,
            fontColor: '#414141',
            maxRotation: 100,
            minRotation: 90,
            maxTicksLimit: 16,
          },
        },
      ],
    },
    legend: {
      position: isMobile ? 'bottom' : 'right',
      labels: {
        fontFamily: 'Source Code Pro',
        fontSize: 14,
        fontColor: '#414141',
        padding: 18,
        boxWidth: 16,
        usePointStyle: false,
      },
    },
  };

  const dataTokenSupply = {
    legend: [
      t('home:graphic.public'),
      t('home:graphic.cover'),
      t('home:graphic.bounties'),
      t('home:graphic.pre'),
      t('home:graphic.team'),
      t('home:graphic.treasury'),
    ],
    labels: dataDate,
    datasets: start
      ? [
        {
          ...oLineDefaultOptions,
          label: t('home:graphic.public'),
          data: processData('Public Distribution'),
          backgroundColor: ['#FEFDAF'],
          pointBackgroundColor: '#FEFDAF',
        },
        {
          ...oLineDefaultOptions,
          label: t('home:graphic.cover'),
          data: processData('Cover Traffic'),
          backgroundColor: ['#FEFDAF'],
          pointBackgroundColor: '#FEFDAF',
        },
        {
          ...oLineDefaultOptions,
          label: t('home:graphic.bounties'),
          data: processData('Bounties'),
          backgroundColor: ['#C0F3FF'],
          pointBackgroundColor: '#C0F3FF',
        },
        {
          ...oLineDefaultOptions,
          label: t('home:graphic.pre'),
          data: processData('Early Token Buyers'),
          backgroundColor: ['#4B79B4'],
          pointBackgroundColor: '#4B79B4',
        },
        {
          ...oLineDefaultOptions,
          label: t('home:graphic.team'),
          data: processData('Team & Advisors'),
          backgroundColor: ['#1423C1'],
          pointBackgroundColor: '#1423C1',
        },
        {
          ...oLineDefaultOptions,
          label: t('home:graphic.treasury'),
          data: processData('Treasury'),
          backgroundColor: ['#060D62'],
          pointBackgroundColor: '#060D62',
        }]
      : '',
  };

  const graphWidth = screen.width < 420 ? 420 : 520;

  return (
    <section ref={ref} id="TOKEN-RELEASE" className="section-token-release">
      <div className="container">
        <div>
          <h2>{t('home:token.title')}</h2>
          <p>{t('home:token.about')}</p>
        </div>
        <div className="table-info">
          <div className="container-table">
            <div className="title">
              <h4>{t('home:token.subTitle')}</h4>
            </div>
            <div className="list-table">
              <ul>
                <li>{t('home:token.listItemA')}</li>
                <li>{t('home:token.listItemB')}</li>
                <li>{t('home:token.listItemC')}</li>
                <li>{t('home:token.listItemD')}</li>
                <li>{t('home:token.listItemE')}</li>
                <li>{t('home:token.listItemF')}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3>{t('home:token.secondSubTitle')} (%)</h3>
          <p>{t('home:token.secondSubAbout')}</p>
          <div>
            <Pie data={data} width={100} height={420} options={options} />
          </div>
        </div>
        <div>
          <h3>{t('home:token.thirdSubTitle')} (M)</h3>
          <div className="container-chart">
            <div className="help-scroll">
              <Line data={dataTokenSupply} width={100} height={graphWidth} options={dataOption} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HomeTokenRelease;

import React, { useState, useEffect, forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";
import { Line, Pie } from "react-chartjs-2";

import dataSupply from "../../public/assets/json/dataSupply.json";

const HomeTokenRelease = forwardRef(({ setVisibleNow }, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (window.matchMedia("screen and (max-width: 797px)").matches) {
      setIsMobile(true);
    }
  }, []);

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    legend: {
      display: true,
      // position: "right",
      position: isMobile ? "bottom" : "right",
      responsive: false,
      maintainAspectRatio: false,
      labels: {
        fontFamily: "Source Code Pro",
        fontSize: 14,
        fontColor: "#414141",
        padding: 18,
        boxWidth: 21,
        usePointStyle: false,
      },
    },
  };

  const data = {
    labels: [
      "Public Sale",
      "Cover Traffic",
      "Bounties",
      "Early Token Buyers",
      "Team & Advisors",
      "Treasury",
    ],

    datasets: [
      {
        label: "# of Votes",
        data: [75000000, 250000000, 56875000, 180000000, 200000000, 238125000],
        backgroundColor: [
          "#0B005D",
          "#2200C2",
          "#878A01",
          "#C1C500",
          "#F8FE00",
          "#FDFFA2",
        ],

        borderWidth: 0,
      },
    ],
  };

  const dataDate = dataSupply.map((item) => item.Date);
  const dataTreasury = dataSupply.map((item) => item.Treasury);
  const dataTeamNAdvisors = dataSupply.map((item) => item["Team & Advisors"]);
  const dataEarlyTokenBuyers = dataSupply.map(
    (item) => item["Early Token Buyers"]
  );
  const dataBounties = dataSupply.map((item) => item.Bounties);
  const dataCoverTraffic = dataSupply.map((item) => item["Cover Traffic"]);
  const dataPublicSale = dataSupply.map((item) => item["Public Sale"]);

  function cleanData(elements) {
    return elements.map(function (elem) {
      let aux = elem.split("").join("");
      aux = aux.split(",").join("");
      return parseFloat(aux);
    });
  }

  const dataOption = {
    maintainAspectRatio: !1,

    elements: {
      point: {
        radius: 0,
        borderWidth: 0,
      },
    },
    tooltips: {
      mode: "x-axis",
      callbacks: {
        label: function (e, t) {
          return ""
            .concat(t.legend[e.datasetIndex], " ")
            .concat(
              e.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
              " HOPR"
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
            fontFamily: "Source Code Pro",
            fontSize: 14,
            fontColor: "#414141",
            padding: 18,
            max: 1000000000,
            min: 0.0,
            stepSize: 250000000,
            callback: function (value) {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
            maxRotation: 100,
            minRotation: 90,
            maxTicksLimit: 12,
          },
        },
      ],
    },
    legend: {
      position: isMobile ? "bottom" : "right",
      labels: {
        fontFamily: "Source Code Pro",
        fontSize: 14,
        fontColor: "#414141",
        padding: 18,
        boxWidth: 21,
        usePointStyle: false,
      },
    },
  };

  const dataTokenSupply = {
    legend: [
      "Treasury",
      "Team & Advisors",
      "Early Token Buyers",
      "Bounties",
      "Cover Traffic",
      "Public Sale",
    ],
    labels: dataDate,
    datasets: [
      {
        label: "Treasury",
        data: cleanData(dataTreasury),
        backgroundColor: ["#FDFFA2"],
        pointBackgroundColor: "#FDFFA2",
        borderWidth: 0,
        pointBorderWidth: 0,
        lineTension: 0,
      },

      {
        label: "Team & Advisors",
        data: cleanData(dataTeamNAdvisors),
        backgroundColor: ["#FBFB3B"],
        pointBackgroundColor: "#FBFB3B",
        borderWidth: 0,
        pointBorderWidth: 0,
        lineTension: 0,
      },

      {
        label: "Early Token Buyers",
        data: cleanData(dataEarlyTokenBuyers),
        backgroundColor: ["#BCBC2A"],
        pointBackgroundColor: "#BCBC2A",
        borderWidth: 0,
        pointBorderWidth: 0,
        lineTension: 0,
      },

      {
        label: "Bounties",
        data: cleanData(dataBounties),
        backgroundColor: ["#7E7E1E"],
        pointBackgroundColor: "#7E7E1E",
        borderWidth: 0,
        pointBorderWidth: 0,
        lineTension: 0,
      },

      {
        label: "Cover Traffic",
        data: cleanData(dataCoverTraffic),
        backgroundColor: ["#0E01B4"],
        pointBackgroundColor: "#0E01B4",
        borderWidth: 0,
        pointBorderWidth: 0,
        lineTension: 0,
      },

      {
        label: "Public Sale",
        data: cleanData(dataPublicSale),
        backgroundColor: ["#020250"],
        pointBackgroundColor: "#020250",
        borderWidth: 0,
        pointBorderWidth: 0,
        lineTension: 0,
      },
    ],
  };

  return (
    <>
      <section
        ref={ref}
        id="TOKEN-RELEASE"
        className="section-token-release padding-section-aux"
      >
        <div className="container">
          <div>
            <h2>{t("homeToken:title")}</h2>
            <p>{t("homeToken:about")}</p>
          </div>
          <div className="table-info">
            <div className="container-table">
              <div className="title">
                <h4>{t("homeToken:subTitle")}</h4>
              </div>
              <div className="list-table">
                <ul>
                  <li>{t("homeToken:listItemA")}</li>
                  <li>{t("homeToken:listItemB")}</li>
                  <li>{t("homeToken:listItemC")}</li>
                  <li>{t("homeToken:listItemD")}</li>
                  <li>{t("homeToken:listItemE")}</li>
                  <li>{t("homeToken:listItemF")}</li>
                  <li>{t("homeToken:listItemG")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3>{t("homeToken:secondSubTitle")} (%)</h3>
            <p>{t("homeToken:secondSubAbout")}</p>
            <div>
              <Pie data={data} width={100} height={539} options={options} />
            </div>
            <p></p>
          </div>
          <div>
            <h3>{t("homeToken:thirdSubTitle")} (%)</h3>
            <div className="container-chart">
              <div className="help-scroll">
                <Line data={dataTokenSupply} options={dataOption} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeTokenRelease;

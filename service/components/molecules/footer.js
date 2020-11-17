import React from "react";
import Link from "next/link";

const dataInfo = [
  {
    img: "assets/images/icons/twitter.svg",
    link: "https://twitter.com/hoprnet",
  },
  {
    img: "assets/images/icons/telegram.svg",
    link: "https://t.me/hoprnet",
  },
  {
    img: "assets/images/icons/linkedin.svg",
    link: "https://www.linkedin.com/company/hoprnet",
  },
  {
    img: "assets/images/icons/github.svg",
    link: "https://github.com/hoprnet",
  },
  {
    img: "assets/images/icons/medium.svg",
    link: "https://medium.com/hoprnet",
  },
  {
    img: "assets/images/icons/youtube.svg",
    link: "https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA",
  },
  {
    img: "assets/images/icons/discord.svg",
    link: "https://discord.gg/dEAWC4G",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="aux-container">
        <div className="first-line-footer">
          <div className="footer-icon">
            <img
              src="/assets/icons/horp_icon.svg"
              alt="The HOPR-Token footer"
            />
          </div>
          <div className="footer-social">
            <ul className="list-reset">
              {dataInfo.map((e, index) => {
                const { img, link } = e;
                return (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <img src={img} alt="The HOPR-Token NOW" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="second-line-footer">
          <div>
            <p className="copy-footer">
              &copy;{new Date().getFullYear()} HORP Association, all rights
              reserved
            </p>
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <Link href="/about-us">Contact</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
              <li>
                <Link href="/about-us">Partners</Link>
              </li>
              <li>
                <Link href="/about-us">Support</Link>
              </li>
              <li>
                <Link href="/about-us">FAQ</Link>
              </li>
              <li>
                <Link href="/about-us">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

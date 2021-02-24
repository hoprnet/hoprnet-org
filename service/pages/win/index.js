import React, { useEffect, useState } from 'react';

import Layout from '../../components/organisms/layout';
import HomeBacked from '../../components/sections/home-backed';
import {
  BannerGrid,
  Button,
  SectionContainer,
  WinSchedules,
} from '../../components';
import { usePrice } from '../../components/hooks/usePrice';
import { loadNamespaces } from '../_app';

export const Index = () => {
  const [price, getPrice] = usePrice();

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <Layout>
      <div className="win-page">
        <section className="section-hero">
          <div className="background"></div>
          <div className="title">
            <h2>HOPR JUNGFRAU: 24TH FEB 2021</h2>
          </div>
        </section>
        <SectionContainer extraClass="jungfrau">
          <div className="row">
            <div className="left">
              <p>
                Hop around the world with HOPR, and win a share of 100,000 HOPR
                tokens and a trip to Switzerland!
              </p>
            </div>
            <div className="right">
              <img src="assets/images/hopr_seal.png" alt="HOPR" width="351px" />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer invert>
          <div className="wrapper-sales-for">
            <div className="card-view the-balancer">
              <h3 style={{ fontWeight: 'bold' }}>Balancer Launch</h3>
              <div className="containerImg">
                <img src="/assets/images/HPR_Favicon.svg" alt="HOPR Logo" />
                <p>$ {price}</p>
                <p className="label-remember">per HOPR</p>
              </div>
              <Button className="btn-ticket" content="Read More" to="/token" />
            </div>

            <div className="the-char-balancer">
              <p>
                Be the first to own HOPR tokens! Swap HOPR tokens for DAI in the
                time-limited HOPR Genesis DAO Balancer Pool. The pool will
                launch at 14:00 CET on Feb 24th. For more details on how the
                pool works, click&nbsp;
                <a
                  alt="HOPR Medium"
                  href="https://medium.com/hoprnet/the-hopr-token-launch-5afed592b741"
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </SectionContainer>
        <SectionContainer extraClass="release">
          <div>
            <h2>HOPR JUNGFRAU RELEASE</h2>
            <p>
              HOPR releases are all named after Swiss mountains, so it’s only
              fitting that our release is named after Jungfrau, the mountain
              known as the Top of Europe.
            </p>
            <p>
              Watch the videos below to learn more about HOPR, the HOPR Jungfrau
              release and the mountain itself.
            </p>
            <p>
              HOPR Jungfrau will launch at 14:00 CET on Wednesday 24th February.
            </p>
          </div>
        </SectionContainer>
        <BannerGrid />
        <SectionContainer extraClass="release">
          <div>
            <h2>WIN PRIZES</h2>
            <p>
              Take part in our launch day contests to win a share of 100,000
              HOPR tokens and a trip to Switzerland, in association with
              MySwitzerland. Our global launch day event will hop around the
              world to ten different destinations, from Tokyo to San Francisco.
              Each destination will also play host to local community events
              such as AMAs with more HOPR token giveaways. Finally, find the hidden eleventh destination to
              win our grand prize: 50,000 HOPR tokens and a trip for two to
              Switzerland and the fabulous Jungfraujoch! The destinations will
              unlock throughout the day. See below the destination panel for
              full instructions.
            </p>
          </div>
        </SectionContainer>
        <WinSchedules />
        <SectionContainer extraClass="terms">
          <p>
            How to Play: As each new destination unlocks, watch the video to see
            a quiz question. Write your answer in the box below the video and
            press the Submit button to Tweet your answer. Answers must be
            submitted on Twitter, using the hashtags generated by the Submit
            button. Check the countdown on each destination to see when the next
            one will unlock! One winner will be randomly selected for each
            destination once the Jungfrau Launch event ends. The prize for each
            question is 5,000 HOPR tokens. Every destination has a second
            question on the HOPR forum, which also contains clues to the grand
            prize. To win the grand prize, find the clues to the secret eleventh
            destination on our launch day tour. Once you think you’ve worked it
            out, tweet the coordinates of your guess to @hoprnet, along with the
            hashtag #HOPRLaunch. The first person to submit a correct answer
            will win the grand prize. If no-one has guessed the correct answer
            by midnight CET on February 26th, the prize will be awarded to the
            person who made the closest guess. Maximum one guess per Twitter
            account. The grand prize is 10,000 HOPR tokens plus a trip for two
            people to Switzerland, in coordination with MySwitzerland. The trip
            includes economy flights for two, hotel stay for two for 6 nights,
            two tickets on the Jungfraujoch railway and an invitation to the
            HOPR offices in Zurich. The trip can be altered / extended at the
            winner’s expense.
          </p>
        </SectionContainer>
        <HomeBacked />
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'home'], locale),
    },
  };
}

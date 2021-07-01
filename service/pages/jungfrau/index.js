import React, { useEffect } from 'react';

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
import { useTranslation } from '../../hooks/translation';

export const Index = () => {
  const [price, getPrice] = usePrice();
  const { t } = useTranslation();

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <Layout>
      <div className="win-page">
        <section className="section-hero">
          <div className="background"></div>
          <div className="title">
            <h2>{t('jungfrau:headline.title')}</h2>
          </div>
        </section>
        <SectionContainer extraClass="jungfrau">
          <div className="row">
            <div className="left">
              {t('jungfrau:contest.paragraph')}
            </div>
            <div className="right">
              <img src="assets/images/hopr_seal.png" alt="HOPR" width="351px" />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer invert>
          <div className="wrapper-sales-for">
            <div className="card-view the-balancer">
              <h3 style={{ fontWeight: 'bold' }}>{t('common:nowOnUnisap')}</h3>
              <div className="containerImg">
                <img src="/assets/images/HPR_Favicon.svg" alt="HOPR Logo" />
                <p>$ {price}</p>
                <p className="label-remember">{t('home:headline.txtDownNum')}</p>
              </div>
              <Button className="btn-ticket" content={t('common:readMore')} to="/token" />
            </div>
          </div>
        </SectionContainer>
        <SectionContainer extraClass="release">
          <div>
            <h2>{t('jungfrau:release.title')}</h2>
            {t('jungfrau:release.content')}
          </div>
        </SectionContainer>
        <BannerGrid />
        <SectionContainer extraClass="release">
          <div>
            <h2>{t('jungfrau:winPrizes.title')}</h2>
            {t('jungfrau:winPrizes.content')}
          </div>
        </SectionContainer>
        <WinSchedules />
        <SectionContainer extraClass="terms">
          {t('jungfrau:terms.content')}
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
      _ns: await loadNamespaces(['common', 'menu', 'home', 'jungfrau'], locale),
    },
  };
}

import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { SectionContainer } from '../../components';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="win-page">
      <Layout>
        <SectionContainer align="center" extraClass="header">
          <h1 data-aos="fade-down" data-aos-delay="150">
            COMING SOON
          </h1>
        </SectionContainer>
      </Layout>
    </div>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(
        ['common', 'menu'],
        locale,
      ),
    },
  };
}

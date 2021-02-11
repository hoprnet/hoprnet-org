import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/organisms/layout';
import { loadNamespaces } from './_app';
import Welcome from '../components/home-sections/Welcome';
import HoperFor from '../components/home-sections/HoperFor';
import News from '../components/home-sections/News';
import UseCases from '../components/home-sections/UseCases';
import HoperIs from '../components/home-sections/HoperIs';
import Blog from '../components/home-sections/Blogs';
import Partners from '../components/home-sections/Partners';
import Team from '../components/home-sections/Team';
import Contact from '../components/home-sections/Contact';
export default function Home() {
  const [welcomeAnimate, setWelcomeAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeAnimate(false);
    }, 600);
  }, []);

  return (
    <AnimatePresence>
      <Layout>
        <Welcome welcomeAnimate={welcomeAnimate} />
        {!welcomeAnimate ? (
          <div id="the-old-home">
            <News />
            <UseCases />
            <HoperFor />
            <HoperIs />
            <Blog />
            <Partners />
            <Team />
            <Contact />
          </div>
        ) : (
          ''
        )}
      </Layout>
    </AnimatePresence>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'home'], locale),
    },
  };
}

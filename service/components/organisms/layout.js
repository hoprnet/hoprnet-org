import React, { useRef, useEffect } from 'react';
import Header from '../molecules/header';
import Navbar from '../molecules/navbar';
import Footer from '../molecules/footer';
import { useRouter } from 'next/router';
import ScrollReveal from '../special/ScrollReveal';
import { AnimatePresence } from 'framer-motion';

export default function Layout({ visibleNow, children }) {
  const scrollReveal = useRef(null);
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add('is-revealed');
    document.body.classList.add('has-animations');
    document.body.classList.add('is-loaded');
    scrollReveal.current.init();
  }, []);

  return (
    <AnimatePresence>
      <>
        <div className="init-mask" />
        <ScrollReveal
          ref={scrollReveal}
          children={() => (
            <>
              <Header />
              <div className="cursor">
                <Navbar visibleNow={visibleNow} />
                {children}
                {router.pathname !== '/token' ? <Footer /> : null}
              </div>
            </>
          )}
        />
      </>
    </AnimatePresence>
  );
}

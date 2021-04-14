import React from 'react';
import Layout from '../components/organisms/layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="section-notfound invert-color">
        <div className="container">
          <div class="section-inner">
            <div className="textContainer">
              "Whoops" or "hop-la" as we say in Switzerland, we can't find the URL you've been looking for.
              <br />
              <br />
              Let's get you back to our main page:
              <br />
              <a href="/" className="text-color-high underline">
                www.HOPRnet.org
              </a>
            </div>
            <div className="circleContainer">
              <div className="circle" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

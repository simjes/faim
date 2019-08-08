import React from 'react';
import Highlights from '../components/Highlights';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Share from '../images/share.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="relative flex flex-col items-center md:block w-full mt-40">
      <Share className="landing-background" />

      <div className="lg:ml-vw-10 xl:ml-vw-20 w-56">
        <h1 className="text-5xl">Faim</h1>

        <p className="my-4">Tired of asking the same question every day?</p>

        <q>what should I eat today?</q>

        <p className="my-4">Let us help you answer that!</p>

        <button className="get-started">Get Started</button>
      </div>
    </div>

    <Highlights className="mt-32 xl:mt-96" />
  </Layout>
);

export default IndexPage;

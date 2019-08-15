import React from 'react';
import Details from '../components/Details';
import Highlights from '../components/Highlights';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Share from '../images/share.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="flex flex-col-reverse md:flex-row items-center mt-32">
      <div className="text-center md:text-left w-56">
        <h1 className="text-5xl">Faim</h1>

        <p className="my-4">Tired of asking the same question every day?</p>

        <q>What should I eat today?</q>

        <p className="my-4">Let us help you answer that!</p>

        <button className="get-started">Get Started</button>
      </div>

      <Share className="md:ml-12 xl:ml-32 h-56 md:h-64 lg:h-80 xl:h-120 w-auto" />
    </div>

    <section className="features">
      <Highlights />
    </section>

    <section className="features">
      <Details className="-mx-4 sm:-mx-24" />
    </section>
  </Layout>
);

export default IndexPage;

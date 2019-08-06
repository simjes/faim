import React from 'react';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/Seo';
import Cloud from '../images/cloud.svg';
import Schedule from '../images/schedule.svg';
import Share from '../images/share.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="flex flex-wrap md:flex-no-wrap">
      <h1 className="">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
    </div>

    <p>Now go build something great.</p>

    <Section reverse={false}>
      <Highlight />

      <Share className="h-64 w-auto" />
    </Section>

    <Section reverse={true}>
      <Highlight />

      <Schedule className="h-64 w-auto" />
    </Section>

    <Section reverse={false}>
      <Highlight />

      <Cloud className="h-64 w-auto" />
    </Section>
  </Layout>
);

export default IndexPage;

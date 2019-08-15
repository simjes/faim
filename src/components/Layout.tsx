/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col items-center min-h-screen py-6">
      {/* <h1>{data.site.siteMetadata.title}</h1> */}

      <main className="flex flex-col flex-grow w-full items-center px-4 sm:px-24">
        {children}
      </main>

      <footer className="flex-grow-0">
        <div className="flex justify-center container">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

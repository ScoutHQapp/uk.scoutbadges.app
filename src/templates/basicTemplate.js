import React from "react"
import {graphql} from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/layout'

export default ({ data }) => {
    const markdownPage = data.markdownRemark;
    return (
        <Layout>
            <Helmet>
                <title>{markdownPage.frontmatter.title}</title>
            </Helmet>
            <h1>{markdownPage.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML = {{ __html: markdownPage.html }}/>
        </Layout>
    );
};

export const query = graphql`
  query BadgeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

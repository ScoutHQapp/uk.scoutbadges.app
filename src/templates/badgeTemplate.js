import React from "react"
import {graphql} from "gatsby"
import Layout from '../components/layout'

export default ({ data }) => {
    const badge = data.markdownRemark;
    return (
        <Layout>
            <h1>{badge.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML = {{ __html: badge.html }}/>
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
`;

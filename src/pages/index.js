import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends React.Component {
    render() {
        const badges = this.props.data.allMarkdownRemark.edges

        return (
          <Layout>
            <h1>Hi people</h1>
            <p>Welcome to the new Scout Badges app </p>
              <ul>
                  {badges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                      ))}
              </ul>
          </Layout>
      )
    }
}

export default IndexPage

export const pageQuery = graphql`
query {
    allMarkdownRemark(
      limit: 2000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

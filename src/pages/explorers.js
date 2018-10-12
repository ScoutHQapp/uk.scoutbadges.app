import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class ExplorersPage extends React.Component {
    render() {
        const coreBadges = this.props.data.coreBadges.edges
        const activityBadges = this.props.data.activityBadges.edges
        const stagedBadges = this.props.data.stagedBadges.edges

        return (
          <Layout>
            <h1>Explorer Scouts</h1>
              <ul>
                  <li><Link to={"/promise/scout-promise"}>The Scout Promise</Link></li>
                  <li><Link to={"/promise/scout-law"}>The Scout Law</Link></li>
              </ul>
              <h2>Core Badges</h2>
              <ul>
                  {coreBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                  ))}
              </ul>
              <h2>Top Awards</h2>
              <ul>
                  <li><Link to={"/badges/explorers/award/platinum"}>Chief Scout's Platinum Award</Link></li>
                  <li><Link to={"/badges/explorers/award/diamond"}>Chief Scout's Diamond Award</Link></li>
              </ul>
              <h2>Young Leaders</h2>
              <h2>Activity Badges</h2>
              <ul>
                  {activityBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                      ))}
              </ul>
              <h2>Staged Activity Badges</h2>
              <ul>
                  {stagedBadges.map(badge => (
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

export default ExplorersPage

export const pageQuery = graphql`
query {
    coreBadges: allMarkdownRemark(
      limit: 2000,
      filter: { frontmatter: { section: { eq: "explorers" } type: { eq: "core" } } },
      sort: {fields: [frontmatter___title], order: ASC},
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
    activityBadges: allMarkdownRemark(
      limit: 2000,
      filter: { frontmatter: { section: { eq: "explorers" } type: { eq: "activity" } } },
      sort: {fields: [frontmatter___title], order: ASC},
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
    stagedBadges: allMarkdownRemark(
      limit: 2000,
      filter: { frontmatter: { type: { eq: "staged" } } },
      sort: {fields: [frontmatter___title], order: ASC},
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

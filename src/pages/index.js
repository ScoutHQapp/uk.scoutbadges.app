import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to the new Scout Badges app </p>
      <ul>
          <li><Link to="/explorers/core/membership/">Explorer Membership</Link></li>
      </ul>
  </Layout>
)

export default IndexPage

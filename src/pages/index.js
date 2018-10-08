import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends React.Component {
    render() {
        return (
          <Layout>
              <p>You have reached the beta version of the Scout Badges App.</p>
              <ul>
                  <li>Beavers</li>
                  <li>Cubs</li>
                  <li><Link to={"/scouts/"}>Scouts</Link></li>
                  <li>Explorers</li>
                  <li>Network</li>
              </ul>
              <p>All Badge Content Copyright The Scout Association 2018.</p>
          </Layout>
      )
    }
}

export default IndexPage

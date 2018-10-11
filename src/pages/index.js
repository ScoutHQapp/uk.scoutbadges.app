import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends React.Component {
    render() {
        return (
          <Layout>
              <h1>Scout Badges and how to earn them.</h1>
              <p>You have reached the beta version of the Scout Badges App.</p>
              <ul>
                  <li><Link to={"/beavers/"}>Beavers</Link></li>
                  <li><Link to={"/cubs/"}>Cubs</Link></li>
                  <li><Link to={"/scouts/"}>Scouts</Link></li>
                  <li><Link to={"/explorers/"}>Explorers</Link></li>
                  <li>Network</li>
              </ul>
              <p>All Badge Content Copyright The Scout Association 2018.</p>
          </Layout>
      )
    }
}

export default IndexPage

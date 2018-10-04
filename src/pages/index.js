import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends React.Component {
    render() {
        return (
          <Layout>
              <ul>
                  <li>Beavers</li>
                  <li>Cubs</li>
                  <li><Link to={"/scouts/"}>Scouts</Link></li>
                  <li>Explorers</li>
                  <li>Network</li>
              </ul>
          </Layout>
      )
    }
}

export default IndexPage

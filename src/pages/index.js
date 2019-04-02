import React from 'react'
import { Link } from 'gatsby'
import YouTube from 'react-youtube-embed'

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

              <h2>Install on Android</h2>
              <p>Open in Chrome (not Facebook Browser etc.), Tap on "Add to Home screen"
              <h2>Install on iOS</h2>
              <div>
                <YouTube id="5nlmv2i301U" />
              </div>
              <h2>Roadmap</h2>
              <ol>
                  <li>Add iOS Navigation</li>
                  <li>Add badge images</li>
              </ol>
              <p>All Badge Content Copyright The Scout Association 2018.</p>
          </Layout>
      )
    }
}

export default IndexPage

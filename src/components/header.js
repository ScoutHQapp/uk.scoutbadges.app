import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
        <Link to={"/"}>Home</Link> | <Link to={"/beavers/"}>Beavers</Link> | <Link to={"/cubs/"}>Cubs</Link> | <Link to={"/scouts/"}>Scouts</Link> | <Link to={"/explorers/"}>Explorers</Link>
    </div>
  </div>
)

export default Header

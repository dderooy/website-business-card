import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>David DeRooy</h1>
        <p> An engineer who enjoys programming and learning new things</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#/"
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

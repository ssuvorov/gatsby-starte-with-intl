import React from 'react'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'

const Header = ({ onLanguageChange }) => (
  <div
    style={{
      background: 'rebeccapurple',
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
      <button onClick={() => onLanguageChange('de-DE')}>de</button>
      <button onClick={() => onLanguageChange('en-GB')}>en</button>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <FormattedMessage id="header.title" />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

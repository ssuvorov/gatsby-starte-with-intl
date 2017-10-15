import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Header from './Header'
import Helmet from 'react-helmet'
import Loading from 'components/Loading'
import {
    injectIntl,
    IntlProvider,
    FormattedRelative,
} from 'react-intl'

import './common.css'
import './index.css'

class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      translations: null,
      loading: false
    }
  }

  componentDidMount() {
    const defaultLanguage = window.localStorage.getItem('language') || navigator.language
    window.localStorage.setItem('language', defaultLanguage)
    this.loadLanguageFile(defaultLanguage)
  }

  loadLanguageFile(language) {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({
        translations: { "header.title": `Gatsby ${language}` },
        loading: false
      }, () => {
        window.localStorage.setItem('language', language)
      })
    }, 1000)
  }

  onLanguageChange = (language) => {
    this.loadLanguageFile(language)
  }

  render() {
    const { loading, translations } = this.state
    const { children } = this.props

    if (!translations) {
      return null
    }

    return (
      <IntlProvider locale="en" messages={translations}>
        <section>
          <Helmet
            title="Gatsby Default Starter"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header onLanguageChange={this.onLanguageChange} />
          <div className="container">
            <Loading loading={loading} />
            <div>{children()}</div>
          </div>
        </section>
      </IntlProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.func,
}

export default App

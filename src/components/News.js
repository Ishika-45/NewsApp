import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        A News Component
        <NewsItem/>
      </div>
    )
  }
}

export default News

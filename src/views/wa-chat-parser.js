import React from 'react'

import { Helmet } from 'react-helmet'

import './wa-chat-parser.css'

const WaChatParser = (props) => {
  return (
    <div className="wa-chat-parser-container">
      <Helmet>
        <title>wa-chat-parser - Worthwhile Soggy Monkey</title>
        <meta
          property="og:title"
          content="wa-chat-parser - Worthwhile Soggy Monkey"
        />
      </Helmet>
    </div>
  )
}

export default WaChatParser

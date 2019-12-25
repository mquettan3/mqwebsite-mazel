import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="web development, web, development, design, web design, programmer, programming, coder, coding, software, business, consulting, business consulting" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <script src="/plugins/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/plugins/owl-carousel/owl.carousel.min.css" />
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

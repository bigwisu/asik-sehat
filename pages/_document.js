import Document, { Html, Head, Main, NextScript } from 'next/document'

import Header from '../components/Header';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
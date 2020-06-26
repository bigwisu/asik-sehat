import { withRedux } from '../lib/redux'
import "../styles/styles.scss"
import Header from '../components/Header'

const Layout = ({ children }) => <div>{children}</div>

function AsikSehat({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  )
}

export default withRedux(AsikSehat)
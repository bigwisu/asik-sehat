import { withRedux } from '../lib/redux'
import "../styles/styles.scss"

function AsikSehat({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
export default withRedux(AsikSehat)
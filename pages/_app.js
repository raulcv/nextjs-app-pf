import '../styles/globals.css'
import "../styles/swiper-bundle.min.css";
import App from "next/app"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page)=> page)
  return getLayout(<Component {...pageProps} />)
}

// MyApp.getInitialProps = async (appContext) => {
//     const appProps = await App.getInitialProps(appContext);

//     return {...appProps}
// }

export default MyApp

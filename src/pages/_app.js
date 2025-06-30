import "@/styles/globals.css";
import Menu from "./componets/menu";
import Footer from "./componets/footer";

export default function App({ Component, pageProps }) {
  return <>
  <Menu/>
  <Component {...pageProps} />
  <Footer/>
  </> 
} 


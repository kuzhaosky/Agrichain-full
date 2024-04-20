import "../styles/globals.css";

// INTERNAL IMPORT
import { TrackingProvider } from "../Conetext/Tracking";
import { NavBar } from "../Components"; 
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return(
    // 设置背景色的 div 包裹应用的最外层
    <div style={{ backgroundColor: '#90EE90' }}>
      <Head>
        <title>Agrichain</title>
      </Head>
      <TrackingProvider>
        <NavBar/>
        <Component {...pageProps} />
      </TrackingProvider>
    </div>
  );
}

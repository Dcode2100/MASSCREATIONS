import "@/styles/globals.css";
import "@/styles/second.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className="smsidemenu"></div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

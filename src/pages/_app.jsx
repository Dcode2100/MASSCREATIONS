import "@/styles/globals.css";
import "@/styles/second.css";
import "@/styles/commoncomp.scss";
import "@/styles/carousel.scss";
import "@/styles/arrivals.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Provider } from "react-redux";
import store from "../../store";

export default function App({ Component, pageProps }) {
  const [cartactive, setCartactive] = useState(true);

  return (
    <Provider store={store}>
      <div className="relative">
        <Header cartactive={cartactive} setCartactive={setCartactive} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

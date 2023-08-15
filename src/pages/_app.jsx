import "@/styles/globals.css";
import "@/styles/commoncomp.scss";
import "@/styles/carousel.scss";
import "@/styles/loginsignup.scss";
import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react"; 
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const hideNavbar = pathname === "/signuppage";
  return (
    <div className="relative box-border overflow-hidden">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="relative">
            {!hideNavbar && (
              <div>
                <div className="fixed top-0 z-[2] w-full">
                  <Header />
                </div>
                <div className="relative mt-32"></div>
              </div>
            )}
            <Component {...pageProps} />
            {!hideNavbar && (
              <div className="relative mt-32">
                <Footer />
              </div>
            )}
          </div>
        </PersistGate>
      </Provider>
    </div>
  );
}

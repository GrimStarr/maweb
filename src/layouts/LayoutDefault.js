import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const LayoutDefault = ({ children, ...props }) => (
  <>
    <Header
      navPosition="right"
      className="reveal-from-bottom"
      onLogin={props.onLogin}
      onLogout={props.onLogout}
      account={props.account}
      isConnected={props.isConnected}
    />

    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutDefault;

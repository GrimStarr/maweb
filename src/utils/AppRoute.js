import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  Layout = Layout === undefined ? (props) => <>{props.children}</> : Layout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout
          isConnected={rest.isConnected}
          onLogin={rest.onLogin}
          account={rest.account}
          connected={rest.connected}
          onLogout={rest.onLogout}
        >
          <Component
            {...props}
            account={rest.account}
            connected={rest.connected}
          />
        </Layout>
      )}
    />
  );
};

export default AppRoute;

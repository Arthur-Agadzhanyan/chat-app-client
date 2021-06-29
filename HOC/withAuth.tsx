// HOC/withAuth.jsx
import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { Context } from "../pages/_app";

const notWithAuth = (WrappedComponent: any) => {
  return (props: any) => {

    if (typeof window !== "undefined") {
      const Router = useRouter();
      const {store}  = useContext(Context)

      if (store.isLoading) {
        return (
          <h1>Loading...</h1>
        )
      }

      if (store.isAuth) {
        Router.replace("/chats");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default notWithAuth;

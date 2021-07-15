import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { Context } from "../pages/_app";
import Header from "../components/Header/Header";

const notWithAuth = (WrappedComponent: any) => {
  return (props: any) => {

    if (typeof window !== "undefined") {
      const { store } = useContext(Context)
      const Router = useRouter()

      if (store.isLoading) { // если 
        return <h1>Loading...</h1>
      } else if (!store.isAuth) {
        Router.push("/")
        return null
      } else if (!store.user.verified && Router.pathname !== '/verify') {
        Router.push("/verify")
        return null
      }

      return (<>
        <Header/>
        <WrappedComponent {...props} />
      </>)
    }

    return null;
  };
};

export default notWithAuth;

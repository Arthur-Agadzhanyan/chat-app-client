import { useRouter } from "next/router";
import React, { FC, useContext, useEffect } from "react";
import { Context } from "../pages/_app";
import Header from "../components/Header/Header";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {

    const { store } = useContext(Context)

    if (typeof window !== "undefined") {
      const { store } = useContext(Context)
      const Router = useRouter()
      
      if (!store.isLoading && !store.isAuth) {
        Router.replace("/")
        return null
      }

      else if (store.user.length && !store.user.verified && Router.pathname !== '/verify') {
        Router.replace("/verify")
        return null
      }

      return (<>
        <Header store={store} />
        <WrappedComponent {...props} />
        <MobileNavigation/>
      </>)
    }

    return null;
  };
};

export default withAuth;

import { useRouter } from "next/router";
import React, { FC, useContext } from "react";
import { Context } from "../pages/_app";
import Header from "../components/Header/Header";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {

    if (typeof window !== "undefined") {
      const { store } = useContext(Context)
      const Router = useRouter()

        if (store.isLoading) { // если 
          return <h1>Loading...</h1>
        } 

        else if (!localStorage.getItem("token")) {
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
      </>)
    }

    return null;
  };
};

export default withAuth;

import { useRouter } from "next/router";
import React, { FC, useContext } from "react";

import { Context } from "../pages/_app";

const notWithAuth = (WrappedComponent: any) => {
  return (props: any) => {

    if (typeof window !== "undefined") {
      const {store} = useContext(Context)
      const Router = useRouter()

      if(store.isLoading){ // если 
        return <h1>Loading...</h1>
      } else if(store.isAuth){ // если пользователь авторизован 
        if(!store.user.verified && Router.pathname !== "/verify"){ // если пользователь не подтвердил свою почту и он не находится на странице /verify
          Router.replace('/verify')
          return null
        }else if(store.user.verified){ // если почта подтверждена
          Router.replace('/chats')
          return null
        }
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default notWithAuth;
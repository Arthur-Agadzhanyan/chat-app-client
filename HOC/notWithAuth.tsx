import { useRouter } from "next/router";
import React, { FC, useContext } from "react";

import { Context } from "../pages/_app";

const notWithAuth = (WrappedComponent: any) => {
  return (props: any) => {

    if (typeof window !== "undefined") {
      const { store:{auth} } = useContext(Context)
      const Router = useRouter()

      if (auth.isAuth) { // если пользователь авторизован 
        if (auth.user.length && !auth.user.verified && Router.pathname !== "/verify") { // если пользователь не подтвердил свою почту и он не находится на странице /verify
          Router.replace('/verify')
          return null
        } else if (auth.user.verified) { // если почта подтверждена
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
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Context } from "../pages/_app";
import Header from "../components/Header/Header";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";
import { API_URL_WS } from "../http";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {

    if (typeof window !== "undefined") {
      const { store:{auth, chats} } = useContext(Context)
      const Router = useRouter()
      const socket = useRef<WebSocket>()

      useEffect(()=>{
        if(auth.isAuth && auth.user && auth.user.verified){
          connect()
        }
      },[auth.isAuth]) 

      if (!localStorage.getItem("token") && !auth.isLoading && !auth.isAuth) {
        Router.replace("/")
        return null
      }

      else if (auth.user.length && !auth.user.verified && Router.pathname !== '/verify') {
        Router.replace("/verify")
        return null
      }

      const connect = ()=>{

          socket.current = new WebSocket(`${API_URL_WS}/chats`)

          // Отработает в момент подключения
          socket.current.onopen = ()=>{
            console.log("ебичь эта херь работает")
          }

          // Отработает когда мы получаем какое-либо сообщение
          socket.current.onmessage= (event)=>{
            const data = event.data
            if(data[0] === "{"){
              console.log("aaa");
              
              chats.setMessages([...chats.messages, ...(JSON.parse(data).messages)])
            }
            console.log(data)
          }

          // Отработает когда подключение будет закрыто
          socket.current.onclose= ()=>{
            console.log("Socket закрыт");
            
          }

          // Отработает когда произошла какая-либо ошибка
          socket.current.onerror= ()=>{
            try {
              
            } catch (error) {
              console.log(error)
            }
          }
      }

      

      return (<>
        <Header store={auth} />
        <WrappedComponent {...props} />
        <MobileNavigation/>
      </>)
    }

    return null;
  };
};

export default withAuth;

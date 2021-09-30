import { createContext, useContext, useEffect } from 'react'
import type { AppProps } from 'next/app'

// STORES
import Store from '../store/store'
import UsersStore from '../store/users'
import ChatsStore from '../store/chats'

import { observer } from 'mobx-react-lite'

// MATERIAL-UI STYLES
// import theme from '../theme'
import { ThemeProvider } from '@material-ui/core'

// MOMENT.JS
import 'moment/locale/ru'

//GLOBAL STYLES
import '../styles/globals.css'
import ThemeStore from '../store/theme'

interface State {
  store:{
    auth: Store
    users: UsersStore,
    chats: ChatsStore,
    theme: ThemeStore
  },  
}

const auth = new Store()
const users = new UsersStore()
const chats = new ChatsStore()
const themeStore = new ThemeStore()

export const Context = createContext<State>({
  store:{
    auth,
    users,
    chats,
    theme: themeStore
  },
 
})

function MyApp({ Component, pageProps }: AppProps) {
  const { store } = useContext(Context)

  useEffect(() => {

    if (localStorage.getItem('token')) {
      store.auth.checkAuth().then(()=>console.log(store))
    }
    /* Удаление CSS, внедренного на стороне сервера.*/
    const jssStyles = document.querySelector('#jss-server-side'); 
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  return (
    <Context.Provider value={{ store }}>
      <ThemeProvider theme={themeStore.theme}>
        <Component {...pageProps} />
      </ThemeProvider>   
    </Context.Provider>
  )
}
export default observer(MyApp)

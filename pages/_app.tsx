import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Store from '../store/store'
import { createContext, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import theme from '../theme'
import { ThemeProvider } from '@material-ui/core'

interface State {
  store: Store
}

const store = new Store()

export const Context = createContext({
  store
})

function MyApp({ Component, pageProps }: AppProps) {
  const { store } = useContext(Context)

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     store.checkAuth()
  //   }

  //   /* Удаление CSS, внедренного на стороне сервера.*/
  //   const jssStyles = document.querySelector('#jss-server-side'); 
  //   if (jssStyles && jssStyles.parentElement) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
    
  // }, [])

  return (
    <Context.Provider value={{ store }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>   
    </Context.Provider>
  )
}
export default observer(MyApp)

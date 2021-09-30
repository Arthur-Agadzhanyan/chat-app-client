import { createMuiTheme,Theme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { makeAutoObservable } from 'mobx';

let initialTheme = {
  palette: {
    primary: {
      main: '#7f6e9b',

    },
    secondary: {
      main: '#19857b',//19857b
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
};

if(typeof window !== "undefined"){
  if(localStorage.getItem("theme")){
    initialTheme = JSON.parse(localStorage.getItem("theme") as string)
  }
}

export default class ThemeStore {
  theme: Theme = createMuiTheme(initialTheme)

  constructor() {
    makeAutoObservable(this)
  }

  changeMain(mainColor: string) {
    // без createMuiTheme не работает

    localStorage.setItem("theme", JSON.stringify(createMuiTheme({
      palette: {
        primary: {
          main: mainColor,

        },
        secondary: {
          main: "#19857b",//19857b
        },
        error: {
          main: red.A400,
        },
        background: {
          default: '#fff',
        },
      },
    })))

    this.theme = createMuiTheme({
      palette: {
        primary: {
          main: mainColor,

        },
        secondary: {
          main: "#19857b",//19857b
        },
        error: {
          main: red.A400,
        },
        background: {
          default: '#fff',
        },
      },
    });
  }
}

import Footer from "./Layout/footer/Footer";
import NavBar from "./Layout/navBar/NavBar"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import useLocalStorage from "./hooks/useLocalStorage"
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import ProductPage from "./components/pages/ProductPage";

function App() {
  const [darkMod, setDarkMod] = useLocalStorage('theme',false)

  

  const theme = createMuiTheme({
    palette : {
      type: darkMod ? "dark" : "light",
      primary:{
        main: darkMod ? "#4b4b4d" : "#3f51b5"
      },
      secondary : {
        main :darkMod ? "#5ab045" : "#f5fa1b"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <NavBar darkMod={darkMod} setDarkMod={setDarkMod} />
      <BrowserRouter>
      <Route path="/" exact ><Home darkMod={darkMod} /></Route>
      <Route path="/product/:id" ><ProductPage darkMod={darkMod} /></Route>
      </BrowserRouter>
      <Footer darkMod={darkMod} />
      
    </ThemeProvider>
  );
}

export default App;

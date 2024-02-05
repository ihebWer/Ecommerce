import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
 import Hero from "./components/hero/hero";
import IconSection from "./components/hero/IconSection";
import Main from "./components/main/main.jsx";
import Footer from "./components/footer/footer.jsx";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
         <Hero/> 
       <IconSection/> 
       <Main/>
       <Footer/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

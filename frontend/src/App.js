import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
//import AddBlog from './Pages/AddBlog';
import Blogs from './Pages/Blogs';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import SignInOutContainer from './Container/Auth';
import Header from './Components/Header';
import Footer from './Components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<SignInOutContainer/>}/>
      </Routes>
      <Footer/>
    
      
    </div>
    </ThemeProvider>
  );
}

export default App;

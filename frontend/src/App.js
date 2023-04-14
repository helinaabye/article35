import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
//import AddBlog from './Pages/AddBlog';
import Blogs from './Pages/Blogs';
import { Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import SignInOutContainer from './Pages/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Login from './Pages/Login';

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
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Projects" element={<Projects/>}/>
      <Route exact path="/Blogs" element={<Blogs/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    
      
    </div>
    </ThemeProvider>
  );
}

export default App;
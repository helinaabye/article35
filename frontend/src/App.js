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
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Login from './Pages/Login';
import AuthContextProvider from './contexts/authContext';
import Profile from './Pages/Profile';
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
      <AuthContextProvider>
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path="/About" element={<About/>}/>
            <Route exact path="/Projects" element={<Projects/>}/>
            <Route exact path="/Blogs" element={<Blogs/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Profile" element={<Profile/>}/>
          </Routes>
          <Footer/>
        </div>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
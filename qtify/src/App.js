import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Section from './Section/Section';
import './colorVar.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  }
});

function App() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios.get('https://qtify-backend.labs.crio.do/albums/top').then((response) => {
      setAlbums(response.data);
    })
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Hero />
          <Section label="Top Albums" albums={albums} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import './colorVar.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './components/Footer'; // Import Footer component
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          {/* Render Navbar component */}
          <Navbar />

          {/* Use Routes to define your page routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>

          {/* Render Footer component */}
          <Footer />
        </div>
      </Router>
    </ChakraProvider> /* Close ChakraProvider */
  );
}

export default App;

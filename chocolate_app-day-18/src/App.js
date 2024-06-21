import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Product from './Components/Products';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

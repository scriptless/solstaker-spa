import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Join from './components/Join';

function App() {
  return (
    <div class="container mx-auto px-4" id="content">
      <Navbar/>
      <Header/>
      <Features/>
      <Join/>
      <About/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

document.body.classList.add('bg-gray-800');

export default App;

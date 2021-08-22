import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Join from './components/Join';

function App() {
  return (
      <div>
      <Header/>
        <div class="container mx-auto px-4" id="content">
            <Features/>
            <Join/>
            <About/>
            <FAQ/>
            <Contact/>
            <Footer/>
        </div>
    </div>
  );
}

document.body.classList.add('bg-gray-800');

export default App;

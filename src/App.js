import './index.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
//import Skills from './components/Skills';
//import Testimonials from './components/Testimonials';
import Contacts from './components/Contact';
import Footer from "./components/footer";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Footer/>
      <About/>
      {/* <Skills/>
      <Testimonials/> */}
      <Contacts/>
    </main>
  );
}

export default App;

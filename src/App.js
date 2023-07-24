import './App.css';
import Hero from './Components/Hero';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Technologies from './Components/Technologies';

function App() {
  return (
    <div className='bg-[#140339] h-full text-white'>
      <Header/>
      <div className="p-[2rem]"><Hero/>
      <About/>
      <Education/>
      <Technologies/>
      <Projects/>
      </div>
    </div>
  );
}

export default App;

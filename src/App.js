import React,{useState} from 'react';
import './App.css';
import NameAndSkills from './components/NameAndSkills';
import Projects from './components/projects/Projects';

import UIC from './context/UIC';

import './sass/global.scss'
function App() {
  const [showSkills, setShowSkills]= useState(false);

  const toggleSkills = () => {
      setShowSkills(!showSkills);
  }

  const [animationPhase, setAnimationPhase] = useState(1)

  const onComplete = () => {
    setAnimationPhase((animationPhase) => (animationPhase += 1))
    
  }
  return (
    <UIC.Provider value={{showSkills, toggleSkills, animationPhase, onComplete}}>
    <div className="App">
        <NameAndSkills />
        <Projects />
    
      </div>
    </UIC.Provider>

  );
}

export default App;

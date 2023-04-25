import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style/app.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Mobile from './components/Header/Mobile/Mobile';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

function App() {

  const [className, setClassName] = useState('app');

  const changeLoaded = (str) => {
    setClassName(str);
  }

  useEffect(() => {
    const path = window.location.href.split('/');
    if(!path[path.length - 1]) {
      changeLoaded('app loaded');
    }
  },[])

  return (
    <Router>
        <div className={className}>
            <Header />
            <Mobile />

            <Routes>
                <Route path='/' element={<Main 
                    changeLoaded={changeLoaded}
                />} />
                <Route path='/about' element={<AboutMe 
                    changeLoaded={changeLoaded}
                />} />
                <Route path='/contact' element={<Contact
                    changeLoaded={changeLoaded}
                />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;

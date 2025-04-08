// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import NavigationDrawer from './components/NavigationDrawer';
// import Home from './pages/Home';
// import Tasks from './pages/Tasks';
// import About from './pages/About';
// import './App.css';

// function App() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const closeDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const drawer = document.querySelector('.drawer');
//       const hamburger = document.querySelector('.hamburger');
      
//       if (isDrawerOpen && 
//           drawer && 
//           !drawer.contains(event.target) && 
//           hamburger && 
//           !hamburger.contains(event.target)) {
//         closeDrawer();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isDrawerOpen]);

//   return (
//     <Router>
//       <div className="app-container">
//         <NavigationDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
//         <button className="hamburger" onClick={toggleDrawer}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//         <div className={`overlay ${isDrawerOpen ? 'show' : ''}`} onClick={closeDrawer}></div>
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/tasks" element={<Tasks />} />
//             <Route path="/about" element={<About />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavigationDrawer from './components/NavigationDrawer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';
import './App.css';

function App() {
  // Initialize drawer as open on desktop (width ≥ 768px)
  const [isDrawerOpen, setIsDrawerOpen] = useState(window.innerWidth >= 768);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Handle window resize (optional: close drawer if switching to mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(true); // Auto-open on desktop
      } else {
        setIsDrawerOpen(false); // Auto-close on mobile
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Click-outside logic (unchanged)
  useEffect(() => {
    const handleClickOutside = (event) => {
      const drawer = document.querySelector('.drawer');
      const hamburger = document.querySelector('.hamburger');
      
      if (isDrawerOpen && 
          drawer && 
          !drawer.contains(event.target) && 
          hamburger && 
          !hamburger.contains(event.target)) {
        closeDrawer();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <Router>
      <div className="app-container">
        <NavigationDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        <button className="hamburger" onClick={toggleDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`overlay ${isDrawerOpen ? 'show' : ''}`} onClick={closeDrawer}></div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
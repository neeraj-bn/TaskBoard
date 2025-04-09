import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import NavigationDrawer from "./components/NavigationDrawer";
import { GiHamburgerMenu } from "react-icons/gi";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Tasks = lazy(() => import("./pages/Tasks"));
const About = lazy(() => import("./pages/About"));

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(window.innerWidth >= 768);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      setIsDrawerOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const drawer = document.querySelector(".drawer");
      const hamburger = document.querySelector(".hamburger");
      if (
        isDrawerOpen &&
        isMobile &&
        drawer &&
        !drawer.contains(event.target) &&
        hamburger &&
        !hamburger.contains(event.target)
      ) {
        closeDrawer();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDrawerOpen, isMobile]);

  return (
    <Router>
      <div className="app-container">
        <NavigationDrawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          isMobile={isMobile}
        />

        <button className="hamburger" onClick={toggleDrawer}>
          <GiHamburgerMenu style={{ width: "100%", height: "100%" }} />
        </button>
        <main
          className={`main-content ${
            isDrawerOpen && window.innerWidth >= 768 ? "drawer-open" : ""
          }`}
        >
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;

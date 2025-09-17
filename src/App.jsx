import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ProjectDetail from "./pages/ProjectDetail";
import Top from "./components/Top";
import Background from "./components/Background";

function App() {
  return (
    <main>
      
      <Header />
  <Navigation />
  <Background />
  <Top />
  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      
    
      
      </main>
   
  );
}
export default App;

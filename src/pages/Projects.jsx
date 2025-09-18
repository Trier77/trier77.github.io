import { useEffect, useState } from "react";
import ProjectDetail from "./ProjectDetail";
import {Link} from "react-router-dom";

export default function Projects() {
  const [projs, setProjs] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProjs(data);
    }
    getData();

    // klik udenfor => luk overlay
    function handleClickOutside(e) {
      if (!e.target.closest(".project-card")) {
        setActiveId(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function toggleActive(id) {
    setActiveId(activeId === id ? null : id);
  }

  return (
          <>
            <article className="project-kasse" id="projects">
              <h2>Projekter</h2>
              <section className="project-roster">
              {projs.map((proj) => (
              <ProjectDetail
              key={proj.id}
              proj={proj}
              isActive={activeId === proj.id}
              onClick={() => toggleActive(proj.id)} />
              ))}
              </section>

              <Link to="/about#about-me"> <h4 className="projekt-knap">Klik her for at lære mere om mig</h4> </Link>
            </article>
          </>
    
    
  );
}





    {/* <section className="project-roster">
        <img src="/img/thumbnails/can_it.jpg" alt="" />
        <img src="/img/thumbnails/coil.jpg" alt="" />
        <img src="/img/thumbnails/dff.jpg" alt="" />
        <img src="/img/thumbnails/freder.jpg" alt="" />
        <img src="/img/thumbnails/lucifer.jpg" alt="" />
        <img src="/img/thumbnails/moderkage.jpg" alt="" />
        <img src="/img/thumbnails/revy.jpg" alt="" />
        <img src="/img/thumbnails/can_it.jpg" alt="" />

    </section> */}
      
   
 
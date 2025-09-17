import { useEffect, useState } from "react";


export default function Projects(){
    const [projs, setProjs] = useState([]);
      useEffect(() => {
    async function getData() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      console.log("Fetched data:", data);
      setProjs(data);
    }
    getData();
   
  }, []);
//    console.log(data);
  
    return(
      <>
        <section className="project-roster">
      {projs.map((proj) => (
        <img
          key={proj.id}
          src={proj.image}
          alt={proj.title}
          title={proj.title}
        />
      ))}
    </section>

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
      </>
   
    );
}
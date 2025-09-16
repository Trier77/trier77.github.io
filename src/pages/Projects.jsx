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
    <section id="clients">
      <div className="headline-container">
        <h2>You are at Project</h2>
      </div>
      {/* {projs.map(projs => (
        <ClientRow client={client} key={client.id} />
      ))} */}
    </section>
    );
}
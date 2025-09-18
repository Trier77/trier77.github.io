import CopyEmailButton from "./CopyEmailButton"
import {Link} from "react-router-dom";
export default function Top(){
    return(
        <>
        

        <article className="me-boxes">
            <section className="left-boxes">
                <div className="left-sect navn-box">
                    <h2>Hejsa! <br />Mit navn er </h2><Link to="/about"> <h1>Jacob Trier</h1></Link>
                </div>
                
                <div className="left-sect cv-box">
                    <h2>CV</h2>
                    <h3>Se min udannelse og erfaringer</h3>
                    <div className="cv-kasse">
                        <a href="/mit_cv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '> Mit CV </a> </div>
                </div>
                    
                <div className="left-sect email-box">
                    <h2>Kontakt</h2>
                    <h3>Skal vi snakke sammen</h3>
                    
                    <CopyEmailButton />
                </div>

            </section>
            
            <section className="right-boxes">
                <div className="right-sect banner">
        
                    <div className="sliderWrapper">
                        <div className="slider" style={{"--bill-antal": 12}}>
                        <div className="item" style={{ "--position": 1 }}><img src="img/logos/ae.png" alt="dragon1"/></div>
                        <div className="item" style={{ "--position": 2 }}><img src="img/logos/pr.png" alt="dragon2"/></div>
                        <div className="item" style={{ "--position": 3 }}><img src="img/logos/aff-design.png" alt="dragon3"/></div>
                        <div className="item" style={{ "--position": 4 }}><img src="img/logos/figma.png" alt="dragon4"/></div>
                        <div className="item" style={{ "--position": 5 }}><img src="img/logos/github.png" alt="dragon5"/></div>
                        <div className="item" style={{ "--position": 6 }}><img src="img/logos/html.png" alt="dragon6"/></div>
                        <div className="item" style={{ "--position": 7 }}><img src="img/logos/css.png" alt="dragon7"/></div>
                        <div className="item" style={{ "--position": 8 }}><img src="img/logos/js.png" alt="dragon8"/></div>
                        <div className="item" style={{ "--position": 9 }}><img src="img/logos/react.png" alt="dragon9"/></div>
                        <div className="item" style={{ "--position": 10 }}><img src="img/logos/audacity.png" alt="dragon10"/></div>
                        <div className="item" style={{ "--position": 11 }}><img src="img/logos/reaper.webp" alt="dragon10"/></div>
                        <div className="item" style={{ "--position": 12 }}><img src="img/logos/davinci.png" alt="dragon10"/></div>
                        </div>
                    </div>            
        
                </div>
                <div className="model-ramme">
                    <Link to="/about"><div className="model"></div></Link>
                </div>
                

                <div className=" right-sect tools">
                    <h2>Værktøj</h2>
                    <p>Jeg har erfaring med masser Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus labore odit rerum neque obcaecati omnis assumenda quaerat nisi! Repellat assumenda placeat iure laudantium in! Reprehenderit saepe excepturi nostrum modi dolorem?</p>
                </div>
            </section>
        </article>
        </>
    )
}
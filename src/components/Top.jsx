import CopyEmailButton from "./CopyEmailButton"
import {Link} from "react-router-dom";
export default function Top(){
    return(
        <>
        

        <article className="me-boxes">
            <section className="left-boxes">
                <div className="left-sect navn-box">
                    <h2>Mit navn er </h2><Link to="/about#about-me"> <h1>Jacob Trier</h1></Link>
                </div>
                
                <div className="left-sect cv-box">
                    <h2>CV</h2>
                    <h3>Se min udannelse og erfaringer</h3>
                    <div className="cv-kasse">
                        <a href="/mit_cv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '> Mit CV </a> </div>
                </div>
                    
                <div className="left-sect email-box">
                    <h2>Kontakt</h2>
                    <h3>Skal vi snakke sammen?</h3>
                    
                    <CopyEmailButton />
                </div>

            </section>
            
            <section className="right-boxes">
                <div className="right-sect banner">
        
                    <div className="sliderWrapper">
                        <div className="slider" style={{"--bill-antal": 12}}>
                        <div className="item" style={{ "--position": 1 }}><img src="img/logos/ae.webp" alt="dragon1"/></div>
                        <div className="item" style={{ "--position": 2 }}><img src="img/logos/pr.webp" alt="dragon2"/></div>
                        <div className="item" style={{ "--position": 3 }}><img src="img/logos/aff-design.webp" alt="dragon3"/></div>
                        <div className="item" style={{ "--position": 4 }}><img src="img/logos/figma.webp" alt="dragon4"/></div>
                        <div className="item" style={{ "--position": 5 }}><img src="img/logos/github.webp" alt="dragon5"/></div>
                        <div className="item" style={{ "--position": 6 }}><img src="img/logos/html.webp" alt="dragon6"/></div>
                        <div className="item" style={{ "--position": 7 }}><img src="img/logos/css.webp" alt="dragon7"/></div>
                        <div className="item" style={{ "--position": 8 }}><img src="img/logos/js.webp" alt="dragon8"/></div>
                        <div className="item" style={{ "--position": 9 }}><img src="img/logos/react.webp" alt="dragon9"/></div>
                        <div className="item" style={{ "--position": 10 }}><img src="img/logos/audacity.webp" alt="dragon10"/></div>
                        <div className="item" style={{ "--position": 11 }}><img src="img/logos/reaper.webp" alt="dragon10"/></div>
                        <div className="item" style={{ "--position": 12 }}><img src="img/logos/davinci.webp" alt="dragon10"/></div>
                        </div>
                    </div>            
        
                </div>
                <div className="model-ramme">
                    <Link to="/about#about-me"><div className="model"></div></Link>
                </div>
                

                <div className=" right-sect tools">
                    <h2>Hvad har jeg?</h2>
                    <p>Jeg har erfaring inden for design og opbygning hjemmesider med frontend-programmering. Jeg har lavet små og lidt større videoproduktion i form af alt fra reels til filme, klippe og redigerer revyer. Jeg har arbejdet med komposition i form af Motion Graphics og VFX. Jeg er heller længere fremmede i den spændende verden iinden for animation og 3D.</p>
                    <p>Jeg har en del programmer og redskaber i min værktøjskasse efterhånden. Jeg er frisk på så godt som alt inden for faget som multimediedesigner</p>
                </div>
            </section>
        </article>
        </>
    )
}
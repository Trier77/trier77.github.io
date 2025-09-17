export default function Top(){
    return(
        <>
        <article className="me-boxes">
            <section className="left-boxes">
                <div className="navn-box"></div>
                <div className="cv-box"></div>
                <div className="email-box"></div>

            </section>
            
            <section className="right-boxes">
                <div className="banner">
        
                    <div className="sliderWrapper">
                        <div className="slider" style={{"--bill-antal": 12}}>
                        <div className="item" style={{ "--position": 1 }}><img src="public/img/logos/ae.png" alt="dragon1"/></div>
                        <div className="item" style={{ "--position": 2 }}><img src="public/img/logos/pr.png" alt="dragon2"/></div>
                        <div className="item" style={{ "--position": 3 }}><img src="public/img/logos/aff-design.png" alt="dragon3"/></div>
                        <div className="item" style={{ "--position": 4 }}><img src="public/img/logos/figma.png" alt="dragon4"/></div>
                        <div className="item" style={{ "--position": 5 }}><img src="public/img/logos/github.png" alt="dragon5"/></div>
                        <div className="item" style={{ "--position": 6 }}><img src="public/img/logos/html.png" alt="dragon6"/></div>
                        <div className="item" style={{ "--position": 7 }}><img src="public/img/logos/css.png" alt="dragon7"/></div>
                        <div className="item" style={{ "--position": 8 }}><img src="public/img/logos/js.png" alt="dragon8"/></div>
                        <div className="item" style={{ "--position": 9 }}><img src="public/img/logos/react.png" alt="dragon9"/></div>
                        <div className="item" style={{ "--position": 10 }}><img src="public/img/logos/audacity.png" alt="dragon10"/></div>
                        <div className="item" style={{ "--position": 11 }}><img src="public/img/logos/reaper.webp" alt="dragon10"/></div>
                        <div className="item" style={{ "--position": 12 }}><img src="public/img/logos/davinci.png" alt="dragon10"/></div>
                        </div>
                    </div>            
        
                </div>
                <div className="model">billede af mig</div>

                <div className="tools"></div>
            </section>
        </article>
        </>
    )
}
export default function Top(){
    return(
        <>
        

        <article className="me-boxes">
            <section className="left-boxes">
                <div className="left-sect navn-box"><h2>Hejsa! <br />Mit navn er <br />Jacob Trier</h2></div>
                <div className="left-sect cv-box"><h3>Du kan tage et kig på mit CV</h3><button>Mit CV</button></div>
                <div className="left-sect email-box"><h3>Vil du gerne i kontakt med mig?</h3><h4>Tryk her for at kopiere min mail adresse</h4><button>Min mail</button></div>

            </section>
            
            <section className="right-boxes">
                <div className="right-sect banner">
        
                    <div className="sliderWrapper">
                        <div className="slider" style={{"--bill-antal": 12}}>
                        <div className="item" style={{ "--position": 1 }}><img src="/public/img/logos/ae.png" alt="dragon1"/></div>
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
                <div className="model-ramme">
                    <div className="model"></div>
                </div>
                

                <div className=" right-sect tools">
                    <h3>Værktøj</h3>
                    <p>Jeg har erfaring med masser Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus labore odit rerum neque obcaecati omnis assumenda quaerat nisi! Repellat assumenda placeat iure laudantium in! Reprehenderit saepe excepturi nostrum modi dolorem?</p>
                </div>
            </section>
        </article>
        </>
    )
}
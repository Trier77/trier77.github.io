export default function Home(){
    return(
        <>
        <h1>You are at Home</h1>
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
            
            <article className="indmad">
                <h2 data-content="Whalla habibi">Whalla habibi</h2>
                <section className="author">
                    <h3>Jacob Trier</h3>
                    <p>Web Design</p>
                    <p>call me</p>
                </section>
                
                
                {/* <div className="model"></div> */}
            </article>
            
            
        </div>
        <article className="bund-menu">
                <section className="fliser">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </section>
                
            </article>
        </>
        
    );
}
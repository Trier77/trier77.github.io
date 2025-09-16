export default function Home(){
    return(
        <>
        <h1>You are at Home</h1>
        <div className="banner">
            <div className="sliderWrapper">
                <div className="slider" style={{"--bill-antal": 10}}>
                <div className="item" style={{ "--position": 1 }}><img src="public/img/dragon_1.jpg" alt="dragon1"/></div>
                <div className="item" style={{ "--position": 2 }}><img src="public/img/dragon_2.jpg" alt="dragon2"/></div>
                <div className="item" style={{ "--position": 3 }}><img src="public/img/dragon_3.jpg" alt="dragon3"/></div>
                <div className="item" style={{ "--position": 4 }}><img src="public/img/dragon_4.jpg" alt="dragon4"/></div>
                <div className="item" style={{ "--position": 5 }}><img src="public/img/dragon_5.jpg" alt="dragon5"/></div>
                <div className="item" style={{ "--position": 6 }}><img src="public/img/dragon_6.jpg" alt="dragon6"/></div>
                <div className="item" style={{ "--position": 7 }}><img src="public/img/dragon_7.jpg" alt="dragon7"/></div>
                <div className="item" style={{ "--position": 8 }}><img src="public/img/dragon_8.jpg" alt="dragon8"/></div>
                <div className="item" style={{ "--position": 9 }}><img src="public/img/dragon_9.jpg" alt="dragon9"/></div>
                <div className="item" style={{ "--position": 10 }}><img src="public/img/dragon_10.jpg" alt="dragon10"/></div>
                
                </div>
            </div>
            
            <article className="indmad">
                <h2 data-content="Whalla habibi">Whalla habibi</h2>
                <section className="author">
                    <h3>Jacob Trier</h3>
                    <p>Web Design</p>
                    <p>call me</p>
                </section>
                
                <div className="model"></div>
            </article>
            
        </div>
        </>
        
    );
}
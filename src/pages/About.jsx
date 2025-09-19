import {Link} from "react-router-dom";

export default function About(){
    return(
        <>
            <div className="about-kasse" id="about-me">
                <h2>Lidt om mig</h2>
                    <p>
                        Jeg har valgt at blive multimediedesigner, for der er bare noget ved at lave noget imponrende, indlevende og brugbart. Og der er så meget at tage fat i. Og jeg brænder for at gøre ting mere interessante – hvad enten det er en film, et interface, et website eller et enkelt visuelt element.</p>

                        <br /><p>
                        Jeg har i mange år gerne villet arbejde inden for film og videoproduktion. Til at starte med arbejdede jeg kun med redigering og komposistion. Lavet små VFX-klip og få det til at se bedre ud. De senere år er jeg kommet i gang med selv at optage og producerer. Filmet sportsevents, revyer og små egne projekter. Har taget og er i gang med kurser i både Blender og Unreal Engine.
                        </p>
                        
                        
                        <br /><p>
                        Jeg synes også at det er imponerende hvordan nogen kun med stemmen kan fortælle eller blive til en karakter at historie og oplevelser bliver helt unikke. Jeg er nu selv blevet til en stemmelægger. Omend jeg stadig er amatør inden for det felt, så ved jeg, hvor vigtigt det er, at have den rette stemme/karakter/look/stemning til at give en god indlevelse og bedre oplevelse'. 
                        </p>
                        
                        
                        <br /><p>
                        Det nyeste for mig nu er programmering. Frontend. Fed interface, dejligt UI/UX-design, sans for æstetik og funktionalitet. Det gør bare den digitale verden det bedre.
                        </p>
                        

                        <br /><p>
                        Omend jeg er selvstændig og har for det meste været selvkørende, så fungerer jeg bedst i samarbejde med et team. Når jeg har nogen at sparre med så bliver alt bare bedre.
                        Jeg håber vi kan sparrer og samarbejde i den nærmeste fremtid
                        </p>
                        
                        

                       
                    

                    <h4>Nok om det</h4>
                    <Link to="/#projects"> <h4 className="projekt-knap">Klik her for at se mine projekter</h4> </Link>

            </div>
            
        </>
        
    );
}
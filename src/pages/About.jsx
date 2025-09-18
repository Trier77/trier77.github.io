import {Link} from "react-router-dom";

export default function About(){
    return(
        <>
            <div className="about-kasse" id="about-me">
                <h2>Lidt om mig</h2>
                    <p>
                        Personlige kompetencer

                        Jeg er god til kommunikation og teamwork. Jeg trives fint med at arbejde selvstændigt, men jeg fungerer allerbedst, når jeg har nogen at sparre med. Jeg er nysgerrig og tilpasningsdygtig, og jeg har mod på at prøve nye ting – især når det sker i et miljø, hvor der er plads til idéer og eksperimenter.
                        Jeg er analytisk og tænker kritisk, hvilket betyder, at jeg sjældent er den første til at kaste mig hovedkulds ud i noget nyt. Til gengæld er jeg god til at lytte til andres perspektiver og finde værdi i forskellige synspunkter – også når jeg ikke er enig fra starten.

                        På vej mod mine drømme

                        Jeg arbejder på at blive bedre til at slippe frygten for at stå alene med nye opgaver og ansvaret, der følger med. Jeg vil også gerne blive bedre til at bede om hjælp og til at bryde komplekse opgaver ned i overskuelige dele.

                        Passion

                        eg elsker at gøre ting mere interessante og give dem et ekstra lag – om det så er en film, et stykke content, et UI eller en lille detalje i et projekt. Det er netop det ekstra, der driver mig.

                        Uddannelse

                        Jeg har valgt uddannelsen som multimediedesigner, fordi jeg gerne vil arbejde med visuel produktion – hvad enten det er film, videoindhold, spil, UI eller XR (AR/VR).

                        Faglige kompetencer

                        Jeg kan lave grundlæggende websites – og lige lidt mere, så de bliver spændende og brugervenlige. Jeg har erfaring med videoredigering, compositing og optagelser. Jeg har arbejdet lidt i Unreal Engine og er i gang med at lære Blender bedre at kende. Jeg ser alle mine færdigheder som områder, jeg hele tiden kan udvikle og forbedre.

                        Sammen kan vi rykke

                        Jeg brænder for at gøre ting mere interessante – hvad enten det er en film, et interface, et website eller et enkelt visuelt element. At gøre noget intuitivt og æstetisk stærkt giver værdi, og det er den proces, der motiverer mig.
                    </p>

                    <h4>Nok om det</h4>
                    <Link to="/#projects"> <h4 className="projekt-knap">Klik her for at se mine projekter</h4> </Link>

            </div>
            
        </>
        
    );
}
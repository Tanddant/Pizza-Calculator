import * as React from 'react';
import styles from './Recipie.module.scss';
import { Label } from '@fluentui/react';

export interface IRecipieProps {
}

export interface IRecipieState {
}

export default class Recipie extends React.Component<IRecipieProps, IRecipieState> {
    private text: any;

    constructor(props: IRecipieProps) {
        super(props);

        this.text = React.createRef();
    }

    public render(): React.ReactElement<IRecipieState> {
        return (
            <div className={styles.wrapper}>
                <span className={styles.header} onClick={() => {this.text.current.style.transform = "scaleY(1)"}}>Nu har jeg ingredienser, hvad så?</span>

                <div ref={this.text} id={"text"} className={styles.text}>    
                    <p>
                        Når du har fundet alle dine ingredienser, skal vi til det sjove, at lave din pizza!
                        <br />
                        <br />
                        Herunder finder du <i>min</i> fremgangsmåde, jeg siger på ingen måde at det er den rigtige,
                        faktisk tværtimod, jeg eksperimentere fra gang til gang når jeg laver pizza, jeg ændre alt fra
                        hævetid til fugtighedsprocenten, men ud fra standardopskriften ovenfor er det her min goto metode.
                    </p>

                    <p>
                        <b>Første dagen</b><br />
                        <i>Ja, første dagen,</i> når jeg laver pizza, starter jeg 2-3 dage før,
                        det gør jeg fordi jeg syntes at en langtidshævet dej bare er bedre.
                        <br /><br />
                        Jeg starter med at røre min dej, det gør jeg sådan her:
                        <br />
                        Jeg tilsætter vand, salt og 10% af mit mel (bare på slump) i en skål, så røre jeg det sammen til en klisteret masse,
                        når det er gjort, tilsætter jeg min gær, grunden til man ikke tilsætter gæren fra start er for at undgå salten dræber den
                        Når så gæren er opløst tilsætter jeg resten af mit mel og røre/ælter det sammen til en dej.
                        <br />
                        Her skal æltes, til dejen er en samlet, masse der er pæn og glat.
                        <br />
                        Når det er gjort, former jeg dejen til en kugle og stiller den på køl i en <b>stor</b> skål med låg eller film på,
                        her skal den stå i 24-48 timer.
                    </p>

                    <p>
                        <b>Anden dagen</b><br />
                        Når vi når til dag to, eller tre alt efter hvor god tid du er startet i.
                        Er det tid til at fordele dejen ud i små bolde, det gør jeg helt simpelt ved at veje min dej,
                        og dividere med det antal bolde jeg vil lave, så vejer jeg x antal dejklumper ud og former dem til bolde.
                        <br />
                            <a href="https://www.youtube.com/watch?v=v5t5MEZt6LM" target={"_blank"}>Her er en video som eksempel på hvordan man gør (ikke min)</a>
                            <br />
                        Når det er gjort kommer jeg boldene i mindre beholdere sammen med en lille smule olivenolie som jeg også vender boldene i, det forhindre at de tørre ud.
                    </p>


                    <p>
                        <b>PIZZA DAY</b>
                        <br />
                        <i>Så er det dagen du har ventet på!</i>
                        <br />
                        <br />
                        Det er pizza dag, men hold nu tungen lige i munden, den sidste tid er alt afgørende for at de sidste dages arbejde ikke går til spilde.
                        <br />
                        Det hele starter en Ca. 4 timer før du har tænkt dig at lave pizzaen, her skal vi have dejen ud af køleskabet, så den kan stå og varme op til stuetemperatur,
                        gerne et sted hvor den ikke står i direkte sollys.
                        <br />
                        <br />
                        Ca. 1 time før spisetid kommer det næste kritiske punkt, forvarme af ovnen, hvis du har en pizzasten, er det nu den skal findes frem, har du ikke en kan du bruge en bradepande.
                        <br />
                        Placer din pizzasten på den næsthøjeste placering fra toppen af i ovnen, og tænd på fuldt skrald (275&deg;C hos mig) og varmluft.
                        <br />
                            <br />
                        Når ovnen har forvarmet mindst en time er det ved at være pizza tid.
                        <br />
                        Start med at sprede et tyndt lag mel ud over dit bord, placer nu en dejklump i midten, vend den i melen og begynd at strække den ud.
                        <br />
                        <a href="https://www.youtube.com/watch?v=9f9-xTcKzZo" target={"_blank"}>Her er (igen) en video som eksempel på hvordan kan man gøre (ikke min)</a>
                        <br />
                        <br />
                        Når Pizzaen er strukket ud er det tid til at toppe den, fyld tomatsovs, ost, og hvad nu eller hjertet begære på.
                        <br />
                        Herefter bliver det lidt tricky, nu skal vi have pizzaen ind i ovnen, har du en pizza spade er den perfekt, eller kan man faktisk bruge en omvendt bradepande, fremgangsmåden er den samme.
                        <br />
                        Strø et fornuftigt lag mel (eller semolina hvis du har det) ud over din pizzaspade, flyt herefter din pizza over på spaden (få evt. en anden til at hjælpe dig hvis du har lidt svært ved det).
                        <br />
                            <br />
                        Når pizzaen er på spaden mangler vi kun et sidste trin, at få den i ovnen.
                        <br />
                        Det gøres ved at placere enden af spaden omtrent ved bagsiden af din pizzasten, og i nogle få men kraftige ryk at på rystet pizzaen af.
                        <br />
                        <a href="https://www.youtube.com/watch?v=E7AVAeg1mtY" target={"_blank"}> Her er (igen) en video som eksempel på hvordan gøre (ikke min)</a>
                        <br />
                        <br />
                        <b>Så er der kun tilbage at sige velbekomme.</b>
                        <br />
                    </p>
                </div>
            </div >
        );
    }
}
import * as React from 'react';
import styles from './Body.module.scss';
import Calculator from '../Calculator/Calculator';
import Recipie from '../Recipie/Recipie';
import CollapsibleWrapper from '../CollapsibleWrapper/CollapsibleWrapper';

export interface IBodyProps {
}

export interface IBodyState {
}

export default class Body extends React.Component<IBodyProps, IBodyState> {
    public render(): React.ReactElement<IBodyState> {
        return (
            <div className={styles.Background}>
                <div className={styles.BodyWrapper}>
                    <div className={styles.headerText}>Pizzaregneren <span role="img" aria-label="Et pizza slice">🍕</span></div>
                    <Calculator />


                    <div className={styles.subHeader}>FAQ</div>

                    <CollapsibleWrapper title={"Nu har jeg ingredienserne, hvad så nu?"} >
                        <Recipie />
                    </CollapsibleWrapper>
                    <CollapsibleWrapper title={"Shit der var meget teskt i den ovenover, kan jeg få den på 5 linjer?"} >
                        <br />
                        <span>Jeg kan da prøve!</span>
                        <ol>
                            <li>Bland salt, vand og 10% af melet til en masse, tilsæt gær, derefter resten af melet.</li>
                            <li>Form en bold og kom den i køleren mindst 24 timer.</li>
                            <li>Efter mindst 24 timer, del ud i det ønskede antal bolde og vend dem i olie, tilbage på køl.</li>
                            <li>Igen efter mindst 24 timer, ud af køleskabet, lad den hvile på køkkenbordet i 3-5 timer.</li>
                            <li>Stræk dejen ud, på spaden og fyr den ind på maks varme i ovnen.</li>
                        </ol>
                    </CollapsibleWrapper>

                    <div className={styles.fill} />
                    <div className={styles.copyright} >&copy; {new Date().getFullYear()}&nbsp;&nbsp;|&nbsp;&nbsp;<a href={"https://pcdan.dk/"}>Dan Toft</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href={"https://github.com/Tanddant/Pizza-Calculator"}>Source code</a></div>
                </div>
            </div>
        );
    }
}
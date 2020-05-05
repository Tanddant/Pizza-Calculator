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

                    <div className={styles.fill} />
                    <div className={styles.copyright} >&copy; {new Date().getFullYear()}&nbsp;&nbsp;|&nbsp;&nbsp;<a href={"https://pcdan.dk/"}>Dan Toft</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href={"https://github.com/Tanddant/Pizza-Calculator"}>Source code</a></div>
                </div>
            </div>
        );
    }
}
import * as React from 'react';
import styles from './Body.module.scss';
import Calculator from './Calculator';

export interface IBodyProps {
}

export interface IBodyState {
}

export default class Body extends React.Component<IBodyProps, IBodyState> {

    constructor(props: IBodyProps) {
        super(props);
    }

    public render(): React.ReactElement<IBodyState> {
        return (
            <div className={styles.BodyWrapper}>
                <Calculator />
                <br />
{/*                 <div style={{ margin: "auto" }}>
                    Nu har jeg ingredienserne, hvad så?
                    <p>Når du har fundet alle dine ingreienser skal vi til det sjove</p>
                </div> */}
                <div className={styles.fill} />
                <div className={styles.copyright} >&copy; {new Date().getFullYear()} - Dan Toft</div>
            </div>
        );
    }
}
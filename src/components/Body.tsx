import * as React from 'react';
import styles from './Body.module.scss';
import Calculator from './Calculator';
import Recipie from './Recipie';

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
                <Recipie />
                <div className={styles.fill} />
                <div className={styles.copyright} >&copy; {new Date().getFullYear()} - <a href={"https://pcdan.dk/"}>Dan Toft</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href={"https://github.com/Tanddant/Pizza-Calculator"}>Source code</a></div>
            </div>
        );
    }
}
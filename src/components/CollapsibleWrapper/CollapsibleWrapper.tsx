import * as React from 'react';
import styles from './CollapsibleWrapper.module.scss';
import { Icon } from '@fluentui/react';

export interface ICollapsibleWrapperProps {
    title: string;
}

export interface ICollapsibleWrapperState {
    isOpen: boolean;
}

export default class CollapsibleWrapper extends React.Component<ICollapsibleWrapperProps, ICollapsibleWrapperState> {

    constructor(props: ICollapsibleWrapperProps) {
        super(props);

        this.state = {
            isOpen: false
        }

    }

    public render(): React.ReactElement<ICollapsibleWrapperState> {
        return (
            <div className={styles.CollapsibleWrapper}>
                <div className={styles.controls} onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }}>
                    <span className={styles.header}>{this.props.title}</span>
                    <Icon
                        iconName={"ChevronLeftMed"}
                        style={{ transform: `rotate(${this.state.isOpen ? "-90deg" : "0"})` }}
                        className={styles.arrow}
                    />
                </div>
                <div
                    className={styles.Collapsible}
                    style={{
                        maxHeight: `${this.state.isOpen ? "1000px" : "0px"}`
                    }}
                >
                    {this.props.children}
                </div>

            </div>
        );
    }
}
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
    private ref: any;

    constructor(props: ICollapsibleWrapperProps) {
        super(props);
        this.ref = React.createRef();

        this.state = {
            isOpen: false
        }

    }

    public render(): React.ReactElement<ICollapsibleWrapperState> {
        let height = 0;
        if(this.ref.current)
            height = this.ref.current.scrollHeight

        return (
            <div className={styles.CollapsibleWrapper}>
                <div className={styles.controls} onClick={() => { this.setState({ isOpen: !this.state.isOpen }) }}>
                    <span className={styles.header}>{this.props.title}</span>
                    <Icon
                        iconName={"ChevronDown"}
                        style={{ transform: `rotate(${this.state.isOpen ? "0" : "90deg"})` }}
                        className={styles.arrow}
                    />
                </div>
                <div
                    className={styles.Collapsible}
                    ref={this.ref}
                    style={{
                        maxHeight: `${this.state.isOpen ? `${height}px` : "0px"}`
                    }}
                >
                    {this.props.children}
                </div>

            </div>
        );
    }
}
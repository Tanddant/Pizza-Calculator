import * as React from 'react';
import styles from './Calculator.module.scss';
import { TextField, Dropdown, IDropdownOption, Label } from '@fluentui/react';
import { IDoughSettingsString } from '../../models/IDoughSettings';
import { IDoughProvider, DoughProvider } from '../../providers/DoughProvider';
import yeast from '../../assets/yeast_white.png'
import salt from '../../assets/salt_white.png'
import water from '../../assets/water_white.png'
import flour from '../../assets/flour_white.png'

export interface ICalculatorProps {
}

export interface ICalculatorState {
    settings: IDoughSettingsString;
}

const defaultSettings: IDoughSettingsString = { yeast: "0,3", salt: 3 + "", water: 65 + "", count: 2, weight: "280,5" }
const amountOptions: IDropdownOption[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(x => { return { key: x, text: x + "" } as IDropdownOption })

export default class Calculator extends React.Component<ICalculatorProps, ICalculatorState> {
    private provider: IDoughProvider;

    constructor(props: ICalculatorProps) {
        super(props);
        this.provider = new DoughProvider();

        this.state = {
            settings: defaultSettings
        }
    }

    private renderNumber(val: number) {
        return val.toFixed(2).toString().replace(".", ",") + " g"
    }

    private renderIngredient(value: number, text: string, image: string) {
        return <div className={styles.ingredient}><img alt={text} src={image} className={styles.ingredientIcon} /><br /> {text}: <br />{this.renderNumber(value)}</div>
    }

    public render(): React.ReactElement<ICalculatorState> {
        let s = this.state.settings;
        let r = this.provider.CalculateRecipie(this.provider.ConvertStringsToNumber(this.state.settings));

        return (
            <div>
                <div className={styles.topWrap}>
                    <Dropdown className={styles.amountPicker} label={"Antal pizzaer"} options={amountOptions} onChange={(ev, val) => { this.setState({ settings: { ...s, count: val ? Number(val.key) : 0 } }) }} selectedKey={this.state.settings.count} />
                    <TextField label={"Vægt pr. bolle"} className={styles.weightPicker} value={s.weight + ""} onChange={(ev, val) => this.setState({ settings: { ...s, weight: val + "" } })} />
                </div>

                <TextField label={"Fugtigheds %"} value={s.water + ""} onChange={(ev, val) => this.setState({ settings: { ...s, water: val + "" } })} />
                <TextField label={"Salt %"} value={s.salt + ""} onChange={(ev, val) => this.setState({ settings: { ...s, salt: val + "" } })} />
                <TextField label={"Gær %"} value={s.yeast + ""} onChange={(ev, val) => this.setState({ settings: { ...s, yeast: val + "" } })} />

                <Label className={styles.totalLabel}>Du skal bruge</Label>
                <div className={styles.recipieSection}>
                    {this.renderIngredient(r.flour, "Mel", flour)}
                    {this.renderIngredient(r.water, "Vand", water)}
                    {this.renderIngredient(r.salt, "Salt", salt)}
                    {this.renderIngredient(r.yeast, "Gær", yeast)}
                </div>
            </div>
        );
    }
}
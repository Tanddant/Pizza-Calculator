import IRecipie from "../models/IRecipie";
import { IDoughSettings, IDoughSettingsString } from '../models/IDoughSettings';

export interface IDoughProvider {
    CalculateRecipie(settings: IDoughSettings): IRecipie;
    ConvertStringsToNumber(strings: IDoughSettingsString): IDoughSettings;
}

export class DoughProvider implements IDoughProvider {

    public ConvertStringsToNumber(i: IDoughSettingsString): IDoughSettings{
        return {
            count: i.count,
            water: this.parseStringToNumber(i.water),
            salt: this.parseStringToNumber(i.salt),
            weight: this.parseStringToNumber(i.weight),
            yeast: this.parseStringToNumber(i.yeast)
        }
    }

    private parseStringToNumber(intput: string): number{
        return Number(intput.replace(",","."))
    }

    public CalculateRecipie(settings: IDoughSettings) {
        let scale = (settings.weight / (settings.salt + settings.water + settings.yeast + 100));

        return {
            flour: this.calculateValue(100, scale, settings.count),
            water: this.calculateValue(settings.water, scale, settings.count),
            salt: this.calculateValue(settings.salt, scale, settings.count),
            yeast: this.calculateValue(settings.yeast, scale, settings.count),
        } as IRecipie;
    }

    private calculateValue(precentage: number, scale: number, count: number) {
        return ((precentage * scale) * count)
    }

}
import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    cardTitle = "BMI Calculator";

    @track bmiData = {
        weight: 0,
        height: 0,
        result: 0
    }

    onWeightChange(event) {
        this.bmiData.weight = parseFloat(event.target.value);

    }

    onHeightChange(event) {
        this.bmiData.height = parseFloat(event.target.value);

    }

    calculateBMI() {
        try {
            this.bmiData.result = this.bmiData.weight / (this.bmiData.height * this.bmiData.height);
        } catch (error) {
            this.bmiData.result = undefined;
        }
    }

    get bmiValue() {
        if (this.bmiData.result === undefined) {
            return ""
        }
        return `Your BMI is: ${this.bmiData.result}`
    }

}
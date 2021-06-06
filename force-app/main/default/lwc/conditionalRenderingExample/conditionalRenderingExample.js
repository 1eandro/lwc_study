import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {

    @track displayDiv = false;

    @track cityList = ['Jandira', 'Osasco', 'Carapicuiba', 'São Paulo', 'Sorocaba'];

    showDivHandler(event) {
        this.displayDiv = event.target.checked;
    }

}
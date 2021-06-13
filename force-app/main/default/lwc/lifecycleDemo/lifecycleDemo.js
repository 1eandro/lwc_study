import { LightningElement } from 'lwc';

export default class LifecycleDemo extends LightningElement {

    constructor() {
        super()
        console.log("Constructor Called")
    }

    connectedCallback() {
        console.log("Component Connected Callback Called")
    }

    renderedCallback() {
        console.log("Component Rendered Callback Called")
    }

    disconnectedCallback(){
        console.log("Component Disconnected Callback Called")
    }

}

import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/Accountmanager.getAccounts'

export default class AccountManagerApex extends LightningElement {

    @wire(getAllAccounts)
    accounts

    get responseReceived() {
        return this.accounts ? true : false
    }
}
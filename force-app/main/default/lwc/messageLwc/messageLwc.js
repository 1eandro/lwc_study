import { LightningElement, track, wire } from 'lwc';
import messageDemo from '@salesforce/messageChannel/messageDemo__c';
import { MessageContext, publish } from 'lightning/messageService';



export default class MessageLwc extends LightningElement {

    @track messages = []

    @wire(MessageContext) msgContext

    sendHandler() {
        const inputElement = this.template.querySelector('lightning-input')
        if (inputElement) {
            const msg = inputElement.value
            this.messages.push({
                id: this.messages.length,
                value: msg,
                from: 'LWC'
            })
            // publish message
            const messagePayload = {
                message: msg
            }

            publish(this.msgContext, messageDemo, messagePayload)

            inputElement.value = ''
        }
    }

}
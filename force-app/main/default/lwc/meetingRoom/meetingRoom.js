import { LightningElement, api, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class MeetingRoom extends LightningElement {

    @api meetingRoomInfo;
    @api showRoomInfo = false;
    @wire(CurrentPageReference) pageReference

    tileClickHandler() {
        const tileClick = new CustomEvent('tileclick', { detail: this.meetingRoomInfo, bubbles: true })
        this.dispatchEvent(tileClick)
        fireEvent(this.pageReference, 'pubsubtileclick', this.meetingRoomInfo)
    }



}
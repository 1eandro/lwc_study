import { LightningElement, api } from 'lwc';

export default class MeetingRoom extends LightningElement {

    @api meetingRoomInfo;
    @api showRoomInfo = false;

    tileClickHandler() {
        const tileClick = new CustomEvent('tileclick', { detail: this.meetingRoomInfo })
        this.dispatchEvent(tileClick)
    }



}
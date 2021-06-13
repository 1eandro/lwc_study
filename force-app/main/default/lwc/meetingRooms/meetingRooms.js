import { LightningElement, track } from 'lwc';

export default class MeetingRoom extends LightningElement {

    @track selectedMeetingRoom

    meetingRoomsInfo = [
        { roomName: "A-01", roomCapacity: "15" },
        { roomName: "A-02", roomCapacity: "12" },
        { roomName: "A-03", roomCapacity: "16" },
        { roomName: "B-01", roomCapacity: "9" },
        { roomName: "B-02", roomCapacity: "7" },
        { roomName: "B-03", roomCapacity: "8" },
        { roomName: "C-01", roomCapacity: "10" },
        { roomName: "C-02", roomCapacity: "12" }
    ]

    onTileSelectHandler(event){
        const meetingRoomInfo = event.detail;
        this.selectedMeetingRoom = meetingRoomInfo.roomName
    }

    constructor(){
        super()
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this))
    }

}
({
    doInit: function (component, event, helper) {

        component.set("v.meetingRoomInfo", [
            { roomName: "A-01", roomCapacity: "15" },
            { roomName: "A-02", roomCapacity: "12" },
            { roomName: "A-03", roomCapacity: "16" },
            { roomName: "B-01", roomCapacity: "9" },
            { roomName: "B-02", roomCapacity: "7" },
            { roomName: "B-03", roomCapacity: "8" },
            { roomName: "C-01", roomCapacity: "10" },
            { roomName: "C-02", roomCapacity: "12" }
        ])

    },

    handleTileClick: function (component, event, helper) {
        component.set("v.selectedMeetingRoom", event.getParam('roomName'))
    }
})

import { createElement } from "lwc";
import MeetingRooms from "c/meetingRooms";

describe("c-meetingRooms", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("should have 8 meeting room elements", () => {
    const meetingRooms = createElement("c-meetingRooms", { is: MeetingRooms });
    document.body.appendChild(meetingRooms);
    const allMeetingRoomComponents =
      meetingRooms.shadowRoot.querySelectorAll("c-meeting-room");
    expect(allMeetingRoomComponents.length).toBe(8);
  });

  it('should have "Meeting Rooms" as the title', () => {
    const meetingRooms = createElement("c-meetingRooms", { is: MeetingRooms });
    document.body.appendChild(meetingRooms);
    const lightningCard =
      meetingRooms.shadowRoot.querySelector("lightning-card");
    expect(lightningCard.title).toBe("Meeting Rooms");
  });
});

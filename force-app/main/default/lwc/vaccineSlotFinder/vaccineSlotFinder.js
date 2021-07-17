import { LightningElement } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {

    centers = []
    dates = []

    connectedCallback() {

        //const endpoint = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formattedDate}`

        this.fetchVaccineSlots()
    }


    async fetchVaccineSlots() {
        let pinCode = 302004
        let formattedDate = "17-07-2021"
        const vaccineSlotRes = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formattedDate}`)

        const slotsData = await vaccineSlotRes.json()
        console.log("ticaracatica")
        console.log(slotsData)

    }

    get hideMessage() {
        return false
    }

}
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
        this.buildColumnsAndRows(slotsData.centers)

    }

    get hideMessage() {
        return false
    }


    buildColumnsAndRows(data) {
        //build columns/dadte
        const dates = new Map()
        dates.set("name", { label: "Center Name", fieldName: "name", type: "text" })

        //build rows/centers
        const centers = new Map()
        for (const center of data) {
            centers.set(center.center_id, { name: center.name })
            for (const session of center.sessions) {
                // destructuring syntax
                const { date, available_capacity, min_age_limit } = session

                // add date as column in dates map
                dates.set(date, { label: "Center Name", fieldName: "name", type: "text" })
            }
        }

        console.log('dates', dates)
        console.log('centers', centers)

    }

}
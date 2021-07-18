import { LightningElement, track } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {


    data = []
    columns = []

    connectedCallback() {
        //const endpoint = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formattedDate}`
        this.fetchVaccineSlots()
    }

    async fetchVaccineSlots() {
        let pinCode = 302004
        let formattedDate = "17-07-2021"
        const vaccineSlotRes = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formattedDate}`)

        const slotsData = await vaccineSlotRes.json()
        this.buildColumnsAndRows(slotsData.centers)

    }

    buildColumnsAndRows(payload) {

        //build columns/date
        const columns = new Map()
        columns.set("centerName", { label: "Center Name", fieldName: "centerName", type: "text", wrapText: true })

        //build rows/centers
        const data = new Map()
        for (const center of payload) {

            data.set(center.center_id, { centerName: center.name })

            for (const session of center.sessions) {

                // destructuring syntax
                const { date, available_capacity, min_age_limit } = session

                // add date as column in data map
                columns.set(date, {
                    label: date,
                    fieldName: date,
                    type: "text",
                    wrapText: true,
                    cellAttributes: {
                        class: {
                            fieldName: "className"
                        }
                    }
                })

                // add column value for the row
                data.get(center.center_id)[date] = `Available Capacity: ${available_capacity}
                Min Age: ${min_age_limit}`

                data.get(center.center_id).className = available_capacity > 0 ? "slds-text-color_success" : "slds-text-color_error"


            }

        }

        this.data = Array.from(data.values())
        // console.log('data values: ' + JSON.stringify(this.data, null, 2))
        this.columns = Array.from(columns.values())
        // console.log('columns values: ' + JSON.stringify(this.columns, null, 2))

    }

    get hasData() {
        return this.data.length > 0
    }



}
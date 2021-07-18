import { LightningElement, track } from 'lwc';

export default class VaccineSlotFinder extends LightningElement {

    data = []
    columns = []

    pincodeChangeHandler(e) {
        const pinCode = e.target.value
        const isEnterKey = e.keyCode === 13
        const formattedDate = this.template.querySelector('.dateInput').value.split("-").reverse().join("-")
        if (isEnterKey && pinCode.length === 6) {
            const endpoint = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${formattedDate}`
            this.fetchVaccineSlots(endpoint)
        }
    }

    async fetchVaccineSlots(endpoint) {
        const vaccineSlotRes = await fetch(endpoint)
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
        this.columns = Array.from(columns.values())
    }

    get hasData() {
        return this.data.length > 0
    }

}
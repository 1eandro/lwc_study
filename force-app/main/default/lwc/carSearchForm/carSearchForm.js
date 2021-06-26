import { LightningElement, track, wire } from "lwc";
import getCarTypes from "@salesforce/apex/CarSearchFormController.getCarTypes";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";

export default class CarSearchForm extends NavigationMixin(LightningElement) {
  @track carTypes;

  @wire(getCarTypes)
  wiredCarTypes({ data, error }) {
    if (data) {
      this.carTypes = [{ values: "", label: "All Types" }];
      data.forEach((element) => {
        const carType = {};
        carType.value = element.Id;
        carType.label = element.Name;
        this.carTypes.push(carType);
      });
    } else if (error) {
      this.showToast("ERROR", error.body.message, "error");
    }
  }

  handleCarTypeChange(event) {
    const carTypeId = event.detail.value;
    const carTypeSelectionChangeEvent = new CustomEvent("cartypeselect", {
      detail: carTypeId
    });
    this.dispatchEvent(carTypeSelectionChangeEvent);
  }

  createNewCarType() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Car_Type__c",
        actionName: "new"
      }
    });
  }

  showToast(title, message, variant) {
    const evt = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(evt);
  }
}

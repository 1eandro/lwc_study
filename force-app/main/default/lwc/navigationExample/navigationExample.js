import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigationExample extends NavigationMixin(LightningElement) {

    openSFDCFacts() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://sfdcfacts.com'
            }
        })
    }

    openAccountHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        })
    }

    createNewContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    openOppListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        })
    }

    openCaseRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '5001j0000086Au0AAE',
                objectApiName: 'Case',
                actionName: 'view'
            }
        })
    }

    openMeetingRoom() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Meeting_Room',
            }
        })
    }

    previewFile() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'filePreview',
            },
            state: {
                recordIds: '0691j000001uTASAA2,0691j000001uTANAA2,0691j000001uTAIAA2',
                selectedRecordId: '0691j000001uTANAA2'
            }
        })
    }

}
import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox'
import { loadStyle, loadScript } from 'lightning/platformResourceLoader'

export default class SimpleLightBoxExample extends LightningElement {

    slLoaded = false

    renderedCallback() {
        if (!this.slLoaded) {
            Promise.all([
                loadStyle(this, SL + '/simpleLightbox/dist/simpleLightbox.css'),
                loadScript(this, SL + '/simpleLightbox/dist/simpleLightbox.js')
            ]).then(() => {
                this.slLoaded = true
            }).catch((error) => {
                console.error('Could not initialize simple light box -- ', error)
            })
        }
    }

    openGallery() {
        SimpleLightbox.open({
            items: ['/resource/placeholder_images/AreZMHL13Jc.jpg', 
            '/resource/placeholder_images/E41h_XkYgw8.jpg', 
            '/resource/placeholder_images/M1G9QWcQeP4.jpg', 
            '/resource/placeholder_images/XKOLLcRF65Y.jpg', 
            '/resource/placeholder_images/YxRHkHBcoQs.jpg', 
            '/resource/placeholder_images/aUxrxc5TNAA.jpg', 
            '/resource/placeholder_images/elESzPOCP5w.jpg', 
            '/resource/placeholder_images/q8x4XJZ2Ri8.jpg', 
            '/resource/placeholder_images/qXE-JF4PL2U.jpg' ]
        })
    }
    
}
import { Controller } from "stimulus"

export default class extends Controller {
	
	selectImage(event) {
		let image = event.currentTarget
		
		let imageSelectedEvent = new CustomEvent("imageSelected", {
			detail: {
				filename: image.dataset.filename,
				signedBlobId: image.dataset.signedBlobId,
				imageId: image.dataset.imageId,
				embeddedUrl: image.dataset.embeddedUrl,
				thumbnail: image.dataset.thumbnail
			}
		})
		
		this.element.dispatchEvent(imageSelectedEvent)
	}
	
	insertImage(event) {
		
	}
	
}
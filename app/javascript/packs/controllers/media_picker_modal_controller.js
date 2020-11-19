import { Controller } from "stimulus"

export default class extends Controller {
	
	selectImage(event) {
		let image = event.currentTarget
		this.image = image
		
		let imageSelectedEvent = new CustomEvent("media-picker:selected", {detail: this.imageData})
		this.element.dispatchEvent(imageSelectedEvent)
	}
	
	confirm(event) {
		let imageSelectedEvent = new CustomEvent("media-picker:done", {detail: this.imageData})
		this.element.dispatchEvent(imageSelectedEvent)
	}
	
	get imageData() {
		return {
			filename: this.image.dataset.filename,
			signedBlobId: this.image.dataset.signedBlobId,
			imageId: this.image.dataset.imageId,
			embeddedUrl: this.image.dataset.embeddedUrl,
			thumbnail: this.image.dataset.thumbnail
		}
	}
	
}
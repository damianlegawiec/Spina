import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return [ "filename", "signedBlobId", "imageId", "alt", "thumbnail", "clearButton" ]
  }

  connect() {
    // Hide thumbnail if there's no image
    if (this.hasThumbnailTarget && this.thumbnailTarget.children.length == 0) this.hideThumbnail()
  }

  removeImage() {
    this.filenameTarget.value = ""
    this.signedBlobIdTarget.value = ""
    this.imageIdTarget.value = ""
    this.altTarget.value = ""
    this.hideThumbnail()
  }
  
  handleDone(event) {
    // Set fields
    this.filenameTarget.value = event.detail.filename
    this.signedBlobIdTarget.value = event.detail.signedBlobId
    this.imageIdTarget.value = event.detail.imageId

    // Set placeholder
    this.setThumbnail(event.detail.thumbnail)
  }
  
  setThumbnail(imageSrc) {
    this.thumbnailTarget.innerHTML = `<img src="${imageSrc}" class="object-contain w-full h-36" />`
    this.showThumbnail()
  }

  showThumbnail() {
    this.thumbnailTarget.classList.remove('hidden')
    this.clearButtonTarget.classList.remove('hidden')
  }

  hideThumbnail() {
    this.thumbnailTarget.classList.add('hidden')
    this.clearButtonTarget.classList.add('hidden')
  }

}
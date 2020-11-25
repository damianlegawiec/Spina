import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "filename", "signedBlobId", "imageId", "alt", "thumbnail", "clearButton", "trix" ]

  connect() {
    // Hide thumbnail if there's no image
    if (this.hasThumbnailTarget && this.thumbnailTarget.children.length == 0) this.hideThumbnail()
  }
  
  openModal() {    
    fetch(this.element.dataset.mediaPickerPath)
      .then(response => response.text())
      .then(function(modal) {
        document.body.insertAdjacentHTML("beforeend", modal)
        
        this.modal = document.querySelector(`[data-controller*="media-picker-modal"]`)
        this.modal.addEventListener("media-picker:done", this.handleDone.bind(this))
      }.bind(this))
  }

  removeImage() {
    this.filenameTarget.value = ""
    this.signedBlobIdTarget.value = ""
    this.imageIdTarget.value = ""
    this.altTarget.value = ""
    this.hideThumbnail()
  }
  
  handleDone(event) {
    if (this.hasTrixTarget) {
      let attachment = new Trix.Attachment({content: `<span class="trix-attachment-spina-image">
        <img src='${event.detail.embeddedUrl}' />
      </span>`})
      this.trixTarget.editor.insertAttachment(attachment)
    } else {
      // Set fields
      this.filenameTarget.value = event.detail.filename
      this.signedBlobIdTarget.value = event.detail.signedBlobId
      this.imageIdTarget.value = event.detail.imageId

      // Set placeholder
      this.setThumbnail(event.detail.thumbnail)
    }
  }
  
  setThumbnail(imageSrc) {
    this.thumbnailTarget.innerHTML = `<img src="${imageSrc}" class="object-cover w-full h-36" />`
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
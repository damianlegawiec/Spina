import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "filename", "signedBlobId", "imageId", "alt", "thumbnail", "trix" ]

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

  selectImage(event) {
    let image = event.currentTarget

    if (this.element.dataset.mediaPickerInsertType === "trix") {
      let attachment = new Trix.Attachment({content: `<span class="trix-attachment-spina-image">
        <img src='${image.dataset.embeddedUrl}' />
      </span>`})
      this.trixTarget.editor.insertAttachment(attachment)
    } else {
      // Set fields
      this.filenameTarget.value = image.dataset.filename
      this.signedBlobIdTarget.value = image.dataset.signedBlobId
      this.imageIdTarget.value = image.dataset.imageId

      // Set placeholder
      this.setThumbnail(image.dataset.thumbnail)
    }
  }

  setThumbnail(imageSrc) {
    this.thumbnailTarget.innerHTML = `<img src="${imageSrc}" class="object-contain w-full h-36" />`
    this.showThumbnail()
  }

  showThumbnail() {
    this.thumbnailTarget.classList.remove('hidden')
  }

  hideThumbnail() {
    this.thumbnailTarget.classList.add('hidden')
  }

}
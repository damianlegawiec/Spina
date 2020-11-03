import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "modal", "grid", "filename", "signedBlobId", "imageId", "alt", "thumbnail" ]

  connect() {
    // Hide thumbnail if there's no image
    if (this.thumbnailTarget.children.length == 0) this.hideThumbnail()
  }

  open() {
    this.modal.open()
    this.gridTarget.infiniteScroll.initialLoad()
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

    // Set fields
    this.filenameTarget.value = image.dataset.filename
    this.signedBlobIdTarget.value = image.dataset.signedBlobId
    this.imageIdTarget.value = image.dataset.imageId

    // Set placeholder
    this.setThumbnail(image.dataset.thumbnail)

    // Close modal
    this.modal.close()
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

  get modal() {
    return this.modalTarget.modal
  }

}
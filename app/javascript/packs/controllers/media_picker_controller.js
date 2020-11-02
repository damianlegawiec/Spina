import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "modal", "grid", "filename", "signedBlobId", "imageId", "alt", "placeholder" ]

  open() {
    this.modal.open()
    this.loadImages()
  }

  loadImages() {
    fetch(this.gridTarget.dataset.imagesPath)
      .then(response => response.text())
      .then(function(html) {
        this.gridTarget.innerHTML = html
      }.bind(this))
  }

  selectImage(event) {
    let image = event.currentTarget

    // Set fields
    this.filenameTarget.value = image.dataset.filename
    this.signedBlobIdTarget.value = image.dataset.signedBlobId
    this.imageIdTarget.value = image.dataset.imageId

    // Set placeholder
    this.setPlaceholder(image.dataset.thumbnail)

    // Close modal
    this.modal.close()
  }

  setPlaceholder(imageSrc) {
    this.placeholderTarget.innerHTML = `<img src="${imageSrc}" class="shadow-md rounded-lg object-cover w-full h-full" />`
  }

  get modal() {
    return this.modalTarget.modal
  }

}
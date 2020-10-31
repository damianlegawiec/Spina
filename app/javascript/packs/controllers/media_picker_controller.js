import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "modal", "grid", "filename", "signedBlobId", "imageId", "alt", "placeholder" ]

  connect() {

  }

  open() {
    this.modal.open()
    this.fetchImages()
  }

  fetchImages() {
    fetch(this.element.dataset.mediaPickerPath)
      .then((response) => response.text())
      .then(function(html) {
        // Place images in grid
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
    this.placeholderTarget.innerHTML = `<img src="${imageSrc}" class="shadow-md rounded-lg object-cover w-full h-full bg-gray-200" />`
  }

  get modal() {
    return this.modalTarget.modal
  }

}
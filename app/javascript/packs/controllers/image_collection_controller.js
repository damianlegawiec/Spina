import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "collection", "fields" ]
  
  openModal() {    
    fetch(this.element.dataset.mediaPickerPath)
      .then(response => response.text())
      .then(function(modal) {
        document.body.insertAdjacentHTML("beforeend", modal)
        
        this.modal = document.querySelector(`[data-controller*="media-picker-modal"]`)
        this.modal.addEventListener("media-picker:done", this.handleDone.bind(this))
      }.bind(this))
  }
  
  removeImage(event) {
    let id = event.currentTarget.dataset.id
    let image = document.getElementById(id)
    image.parentElement.removeChild(image)
  }
  
  handleDone(event) {
    let childIndex = this.element.dataset.childIndex
    let fields = this.element.dataset.fields

    // Get timestamp
    let time = new Date().getTime()
    let regex = new RegExp(childIndex, 'g')
    let html = fields.replace(regex, time)
    
    let range = document.createRange()
    range.selectNodeContents(document.body)
    let fragment = range.createContextualFragment(html)
    
    fragment.querySelector(`[data-target="media-picker.signedBlobId"]`).value = event.detail.signedBlobId
    fragment.querySelector(`[data-target="media-picker.filename"]`).value = event.detail.filename
    fragment.querySelector(`[data-target="media-picker.imageId"]`).value = event.detail.imageId
    fragment.querySelector('img').src = event.detail.thumbnail

    // Insert fields
    this.collectionTarget.appendChild(fragment)
  }
  
}
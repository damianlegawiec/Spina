import { Controller } from "stimulus"
import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = [ "mediaFolder", "images", "uploadForm", "uploadButton" ]
  
  moveToFolder() {
    alert("Move")
  }
  
  startUpload() {
    // this.uploadButtonTarget.button.loading() // Start loading
    Rails.fire(this.uploadFormTarget, 'submit')
  }
  
  uploaded(event) {
    const [data, status, xhr] = event.detail
    this.imagesTarget.insertAdjacentHTML("afterbegin", xhr.response)
    // this.uploadButtonTarget.button.doneLoading() // Done loading
  }
  
}
import { Controller } from "stimulus"
// import Rails from "@rails/ujs"

export default class extends Controller {
  static targets = [ "mediaFolder", "container", "uploadForm", "fileField", "uploadButton" ]
  
  startUpload() {
    this.uploadButtonTarget.button.loading() // Start loading
    // Rails.fire(this.uploadFormTarget, 'submit')
  }
  
  uploaded(event) {
    const [data, status, xhr] = event.detail
    this.containerTarget.insertAdjacentHTML("afterbegin", xhr.response)
    this.uploadButtonTarget.button.doneLoading() // Done loading
  }
  
  chooseFiles() {
    this.fileFieldTarget.click()
  }
  
}
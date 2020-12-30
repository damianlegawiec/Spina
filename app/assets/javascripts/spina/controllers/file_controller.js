import { Controller } from  "stimulus"

export default class extends Controller {
  static get targets() {
    return ["filename", "form", "input", "actions"]
  }
  
  rename() {
    this.filenameTarget.classList.add("hidden")
    this.actionsTarget.classList.add("hidden")
    this.formTarget.classList.remove("hidden")
    this.inputTarget.focus()
  }
  
  replaceHTML(event) {
    const [data, status, xhr] = event.detail
    this.element.outerHTML = xhr.response
  }
  
  moveToFolder(event) {
    this.element.parentElement.removeChild(this.element)
  }
  
}
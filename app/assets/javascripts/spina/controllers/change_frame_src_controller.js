import { Controller } from "stimulus"

export default class extends Controller {
  
  update() {
    this.turboFrame.src = `/admin/parent_pages?page_collection_id=${this.element.value}`
  }
  
  get turboFrame() {
    return document.querySelector(`turbo-frame#${this.element.dataset.frame}`)
  }
  
}
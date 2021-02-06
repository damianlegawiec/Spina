import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return ["frame"]
  }
  
  connect() {
    this.frameTarget.src = this.defaultUrl
  }
  
  update(event) {
    let select = event.currentTarget
    let option = select.options[select.selectedIndex]
    let src = option.dataset.parentPagesUrl

    this.frameTarget.src = src || this.defaultUrl
  }
  
  get defaultUrl() {
    return this.element.dataset.parentPagesDefaultUrl
  }
  
}
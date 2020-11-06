import { Controller } from "stimulus"

export default class extends Controller {

  invokeAction(event) {
    // Media picker
    // if (event.actionName === "x-media-picker") this.openMediaPicker()
  }

  preventDefault(event) {
    event.preventDefault()
  }

  get editor() {
    return this.element.editor
  }

}
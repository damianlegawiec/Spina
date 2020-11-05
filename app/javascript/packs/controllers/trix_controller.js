import { Controller } from "stimulus"

export default class extends Controller {

  invokeAction(event) {
    // Media picker
    // if (event.actionName === "x-media-picker") this.openMediaPicker()
  }

  preventDefault(event) {
    event.preventDefault()
  }

  openMediaPicker() {
    let attachment = new Trix.Attachment({content: `<img src='#' alt='' />`})
    this.editor.insertAttachment(attachment)
  }

  get editor() {
    return this.element.editor
  }

}
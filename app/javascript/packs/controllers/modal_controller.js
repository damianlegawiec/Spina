import { Controller } from "stimulus"

export default class extends Controller {

  close() {
    this.element.parentElement.removeChild(this.element)
  }

}
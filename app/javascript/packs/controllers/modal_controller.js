import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    this.element[this.identifier] = this
  }

  open() {
    this.element.classList.remove('hidden')
  }

  close() {
    this.element.classList.add('hidden')
  }

}
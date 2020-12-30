import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "container" ]

  toggle() {
    this.containerTarget.classList.toggle('hidden')
  }

}
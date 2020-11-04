import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "knob", "container", "checkbox" ]

  connect() {
    this.renderKnob()
  }

  toggle() {
    this.checkboxTarget.checked = !this.checked
    this.renderKnob()
  }

  renderKnob() {
    if (this.checked) {
      this.containerTarget.classList.remove('bg-gray-200')
      this.containerTarget.classList.add('bg-green-500')
      this.knobTarget.classList.add('translate-x-6')
    } else {
      this.containerTarget.classList.add('bg-gray-200')
      this.containerTarget.classList.remove('bg-green-500')
      this.knobTarget.classList.remove('translate-x-6')
    }
  }

  get checked() {
    return this.checkboxTarget.checked
  }

}
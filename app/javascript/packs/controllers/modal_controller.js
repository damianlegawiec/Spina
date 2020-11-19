import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    this.element[this.identifier] = this
    this.renderBackground()
  }

  close() {
    this.element.parentElement.removeChild(this.element)
  }

  renderBackground() {
    let bgHTML = `<button type="button" class="w-full h-full fixed inset-0 bg-gray-700 bg-opacity-25 animate__animated animate__fadeIn animate__faster" tabindex="-1" data-action="modal#close"></button>`
    this.element.insertAdjacentHTML('afterbegin', bgHTML)
  }

}
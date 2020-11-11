import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    this.element.addEventListener('click', this.confirm.bind(this))
  }

  confirm(event) {
    event.stopPropagation()
    event.preventDefault()
    document.body.insertAdjacentHTML('beforeend', this.modalHTML)
  }

  get modalHTML() {
    return `<div class="modal" data-controller="modal">
      <div class="modal-window">
        <div>${this.message}</div>
        <button class="btn" data-action="modal#close">Cancel</button>
        <a class="btn btn-primary" href="${this.href}" data-method="${this.method}">
          Yes, I'm sure
        </a>
      </div>
    </div>`
  }

  get message() {
    return this.element.dataset.confirmMessage
  }

  get href() {
    return this.element.href
  }

  get method() {
    return this.element.dataset.method
  }

}
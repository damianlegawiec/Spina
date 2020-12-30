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
    return `<div class="modal" data-controller="modal shortcuts" data-action="keyup@document->shortcuts#confirmClick keyup@document->modal#escClose">
      <div class="modal-window animate__animated animate__zoomIn animate__fadeIn animate__faster p-5 max-w-xs">
        <div class="text-center">
          ${this.message}
        </div>
        <div class="text-center text-gray-500 text-sm mt-2">
          This action is irreversible
        </div>
        
        <div class="flex flex-row-reverse mt-3">
          <a class="btn btn-red mt-6 md:mt-0 md:w-1/2 md:ml-3" href="${this.href}" data-shortcuts-target="confirm" data-method="${this.method}">
            Delete
          </a>
          <button class="btn btn-gray mt-2 md:mt-0 md:w-1/2" data-action="modal#close">Cancel</button>
        </div>
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
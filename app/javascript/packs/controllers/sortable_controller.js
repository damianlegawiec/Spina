import { Controller } from "stimulus"
import Sortable from "sortablejs"
import Rails from "@rails/ujs"

export default class extends Controller {

  connect() {
    this.sortable = Sortable.create(this.element, {
      handle: '[data-sortable-handle]',
      onEnd: this.sort.bind(this)
    })
  }

  sort(event) {
    fetch(this.element.dataset.sortPath, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        'X-CSRF-Token': Rails.csrfToken(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ids: this.orderedIds})
    })
  }

  get orderedIds() {
    return this.sortable.toArray()
  }

}
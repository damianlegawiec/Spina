import { Controller } from "stimulus"
import Sortable from "sortablejs"

export default class extends Controller {

  connect() {
    this.sortable = Sortable.create(this.element, {
      handle: '[data-sortable-handle]',
      onEnd: this.saveSort.bind(this)
    })
  }

  saveSort(event) {
    fetch(this.sortPath, {
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
  
  get sortPath() {
    return this.element.dataset.sortPath
  }

}
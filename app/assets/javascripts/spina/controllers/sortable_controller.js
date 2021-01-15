import { Controller } from "stimulus"
import Sortable from "sortablejs"
import formRequestSubmitPolyfill from 'https://cdn.skypack.dev/form-request-submit-polyfill'

export default class extends Controller {
  static get targets() {
    return [ "ids", "form", "list" ]
  }

  connect() {
    this.sortable = Sortable.create(this.listTarget, {
      handle: '[data-sortable-handle]',
      onEnd: this.saveSort.bind(this)
    })
  }

  saveSort(event) {
    this.idsTarget.value = this.orderedIds
    this.formTarget.requestSubmit()
  }

  get orderedIds() {
    return this.sortable.toArray()
  }

}
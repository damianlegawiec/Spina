import { Controller } from "stimulus"
import Sortable from "sortablejs"

export default class extends Controller {

  connect() {
    this.sortable = Sortable.create(this.element, {
      handle: '[data-sortable-handle]',
      onEnd: this.sort.bind(this)
    })
  }

  sort(event) {
    console.log(this.orderedIds)
  }

  get orderedIds() {
    return this.sortable.toArray()
  }

}
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "list", "content" ]

  add(event) {
    // this.listTarget.insertAdjacentHTML('beforeend', "<button>Another new thing</button>")
    let button = event.currentTarget
    let childIndex = button.dataset.childIndex

    // Get timestamp
    let time = new Date().getTime()
    let regex = new RegExp(childIndex, 'g')
    let html = button.dataset.fields.replace(regex, time)

    // Insert fields
    this.contentTarget.insertAdjacentHTML('beforeend', html)
  }

}
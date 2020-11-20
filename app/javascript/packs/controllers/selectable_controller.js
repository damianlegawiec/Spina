import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "item" ]
  
  select(event) {
    this.selected = event.currentTarget
    this.itemTargets.forEach(function(item) {
      item.classList.remove("ring-2", "bg-blue-300", "bg-opacity-10", "ring-blue-600")
    })
    this.selected.classList.add("bg-gray-100", "rounded")
  }
  
}
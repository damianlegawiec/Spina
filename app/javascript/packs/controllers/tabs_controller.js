import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "pane", "button" ]

  show(event) {
    let button = event.currentTarget
    let activePane = document.getElementById(button.dataset.paneId)

    this.hideAllPanes()
    activePane.hidden = false
  }

  hideAllPanes() {
    this.paneTargets.forEach((pane) => pane.hidden = true)
  }

}
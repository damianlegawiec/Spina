import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "pane", "button" ]

  connect() {
    this.hideAllPanes()
    this.deactiveAllButtons()

    let firstButton = this.buttonTargets[0]
    let firstPane = document.getElementById(firstButton.dataset.paneId)
    this.activateButton(firstButton)
    firstPane.hidden = false
  }

  show(event) {
    let activeButton = event.currentTarget
    let activePane = document.getElementById(activeButton.dataset.paneId)

    // Deactivate
    this.deactiveAllButtons()
    this.hideAllPanes()

    // Activate
    this.activateButton(activeButton)
    activePane.hidden = false
  }

  activateButton(button) {
    button.classList.add(...this.activeClasses)
    button.classList.remove(...this.inactiveClasses)
  }

  deactiveAllButtons() {
    this.buttonTargets.forEach(function(button) {
      button.classList.remove(...this.activeClasses)
      button.classList.add(...this.inactiveClasses)
    }.bind(this))
  }

  hideAllPanes() {
    this.paneTargets.forEach((pane) => pane.hidden = true)
  }

  get activeClasses() {
    return (this.element.dataset.tabsActive || "active").split(" ")
  }

  get inactiveClasses() {
    return (this.element.dataset.tabsInactive || "inactive").split(" ")
  }

}
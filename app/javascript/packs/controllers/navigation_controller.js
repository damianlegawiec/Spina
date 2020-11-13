import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "firstLevel", "secondLevel" ]

  connect() {
    
  }

  toggle(event) {
    let button = event.currentTarget
    let secondLevel = button.nextElementSibling
    let closed = secondLevel.classList.contains('translate-x-full')
    this.closeSecondLevels()
    this.closeFirstLevel()

    if (closed) {
      secondLevel.classList.remove("translate-x-full")
      secondLevel.classList.add("md:translate-x-20")
    }
  }

  backToFirstLevel() {
    this.closeSecondLevels()
    this.openFirstLevel()
  }

  openFirstLevel() {
    this.firstLevelTarget.classList.remove("md:bg-opacity-50")
  }

  closeFirstLevel() {
    this.firstLevelTarget.classList.add("md:bg-opacity-50")
  }

  closeSecondLevels() {
    this.secondLevelTargets.forEach(function(level) {
      level.classList.remove("md:translate-x-20")
      level.classList.add("translate-x-full")
    })
  }

}
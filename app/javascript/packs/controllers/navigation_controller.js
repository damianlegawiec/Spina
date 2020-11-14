import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "firstLevel", "firstLevelButton", "secondLevel" ]

  connect() {
    // Bigger than small display
    if (window.innerWidth > 768) {
      this.clickButton(this.firstLevelButtonTargets[0])
    }
  }

  toggle(event) {
    let button = event.currentTarget
    this.clickButton(button)
  }

  clickButton(button) {
    this.firstLevelButtonTargets.forEach(function(button) {
      button.classList.remove('opacity-100')
      button.classList.add('opacity-50')
    })
    button.classList.add('opacity-100')
    button.classList.remove('opacity-50')
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
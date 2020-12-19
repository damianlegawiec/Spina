import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "primary", "button", "navigation" ]

  connect() {
    // Activate button for active item
    let button = this.activeNavigation.querySelector(`button[data-navigation-target*="button"]`)
    this.switchClass(button, "opacity-50", "opacity-100")

    // Activate navigation for active item (only for bigger displays)
    if (window.innerWidth > 768) this.toggleNavigation(this.activeNavigation)
    
    // Enable transitions after 100ms
    setTimeout(function() {
      this.enableTransitions()
    }.bind(this), 100)
  }
  
  enableTransitions() {
    this.switchClass(this.primaryTarget, "transition-none", "transition-colors")
    this.navigationTargets.forEach(function(navigation) {
      this.switchClass(navigation.querySelector("ul"), "transition-none", "transition-transform")
    }.bind(this))
    this.buttonTargets.forEach(function(button) {
      this.switchClass(button, "transition-none", "transition-opacity")
    }.bind(this))
  }

  toggleNavigation(navigation) {
    let ul = navigation.querySelector("ul")
    if (ul.classList.contains("translate-x-full")) { 
      this.primaryTarget.classList.add("md:bg-opacity-50")
      this.switchClass(navigation.querySelector("ul"), "translate-x-full", "md:translate-x-20")
    } else {
      this.primaryTarget.classList.remove("md:bg-opacity-50")
      this.switchClass(navigation.querySelector("ul"), "md:translate-x-20", "translate-x-full")
    }
  }

  toggle(event) {
    let button = event.currentTarget
    let closed = button.nextElementSibling.classList.contains("translate-x-full")
    this.closeAllNavigations()

    // If button was closed, open the nav
    if (closed) {
      this.switchClass(button, "opacity-50", "opacity-100")
      this.toggleNavigation(button.parentElement)
    }
  }

  closeAllNavigations() {
    this.buttonTargets.forEach(function(button) {
      this.switchClass(button, "opacity-100", "opacity-50")
    }.bind(this))

    this.navigationTargets.forEach(function(navigation) {
      this.switchClass(navigation.querySelector("ul"), "md:translate-x-20", "translate-x-full")
    }.bind(this))

    this.primaryTarget.classList.remove("md:bg-opacity-50")
  }

  switchClass(element, from_class, to_class) {
    element.classList.remove(from_class)
    element.classList.add(to_class)
  }

  get activeItem() {
    return this.element.querySelector("[data-navigation-active]")
  }

  get activeNavigation() {
    return this.activeItem.closest(`[data-navigation-target*="navigation"]`)
  }

}
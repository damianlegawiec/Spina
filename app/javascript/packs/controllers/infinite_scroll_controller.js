import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "button", "container" ]

  connect() {
    this.element['infiniteScroll'] = this
    this.scrollElement.addEventListener("scroll", this.loadNextPage.bind(this))
    this.initialLoad()
  }

  disconnect() {
    this.scrollElement.removeEventListener("scroll", this.loadNextPage.bind(this))
  }

  initialLoad() {
    if (this.element.dataset.infiniteScrollPath !== undefined) {
      this.containerTarget.innerHTML = ''
      this.load(this.element.dataset.infiniteScrollPath) 
    }
  }

  changePath(event) {
    this.containerTarget.innerHTML = ''
    this.load(event.currentTarget.dataset.infiniteScrollPath) 
  }

  loadNextPage() {
    if (this.hasButtonTarget) {
      this.containerTarget.removeChild(this.buttonTarget)
      if (this.path !== undefined) this.load(this.path)
    } else {
      this.disconnect()
    }
  }

  load(path) {
    fetch(path)
      .then(response => response.text())
      .then(function(html) {
        this.containerTarget.insertAdjacentHTML('beforeend', html)

        // Button target
        if (this.hasButtonTarget) {
          let top = this.buttonTarget.getBoundingClientRect().top
          if (top < window.innerHeight + 500) {
            this.loadNextPage()
          }
        }
      }.bind(this))
  }

  get scrollElement() {
    if (this.hasContainerTarget) {
      return this.containerTarget
    } else {
      return window
    }
  }

  get path() {
    return this.buttonTarget.dataset.path
  }

}
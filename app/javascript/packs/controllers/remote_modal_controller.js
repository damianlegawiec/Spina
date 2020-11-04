import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    this.element.addEventListener('click', this.openRemoteModal.bind(this))
  }

  openRemoteModal(event) {
    // Prevent default
    event.preventDefault()
    
    fetch(this.element.href)
      .then(response => response.text())
      .then(function(html) {
        document.body.insertAdjacentHTML("beforeend", html)
      })
  }

}
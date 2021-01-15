import { Controller } from "stimulus"

export default class extends Controller {
  
  connect() {
    setTimeout(function() {
      this.element.classList.add('animate__animated', 'animate__fadeOut')
    }.bind(this), 2500)
  }
  
}
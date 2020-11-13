import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    fetch(this.element.dataset.path)
      .then(response => response.text())
      .then(function(html) {
        this.element.innerHTML = html
      }.bind(this))
  }

}
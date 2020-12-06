import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "confirm" ]
  
  connect() {
  }
  
  confirmClick(event) {
    if (event.key === 'Enter') this.confirmTarget.click()
  }
  
}
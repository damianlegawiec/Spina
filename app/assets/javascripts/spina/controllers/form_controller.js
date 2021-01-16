import { Controller } from "stimulus"

export default class extends Controller {
  
  requestSubmit() {
    this.element.requestSubmit()
  }
  
}
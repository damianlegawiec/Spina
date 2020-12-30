import { Controller } from "stimulus"
import formRequestSubmitPolyfill from 'https://cdn.skypack.dev/form-request-submit-polyfill'

export default class extends Controller {
  
  requestSubmit() {
    this.element.requestSubmit()
  }
  
}
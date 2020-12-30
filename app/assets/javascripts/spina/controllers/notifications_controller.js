import { Controller } from "stimulus"

export default class extends Controller {
  static get targets() {
    return ["list"]
  }

  setError(event) {
    const [data, status, xhr] = event.detail
    this.listTarget.innerHTML = xhr.response
  }

}
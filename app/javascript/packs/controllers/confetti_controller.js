import { Controller } from "stimulus"
import confetti from "canvas-confetti"

export default class extends Controller {

  connect() {
    this.element[this.identifier] = this
  }

  boom() {
    this.fire(0.25, {spread: 26, startVelocity: 55})
    this.fire(0.2, {spread: 60})
    this.fire(0.35, {spread: 100, decay: 0.91, scalar: 0.8})
    this.fire(0.1, {spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2})
    this.fire(0.1, {spread: 120, startVelocity: 45})
  }

  fire(particleRatio, options) {
    confetti(Object.assign({}, this.defaults, options, {
      particleCount: Math.floor(this.count * particleRatio)
    }))
  }

  get count() {
    return 200
  }

  get defaults() {
    return {origin: {y: 0.7}}
  }

}
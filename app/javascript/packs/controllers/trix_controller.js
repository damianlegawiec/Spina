import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "editor", "imageFields", "altField" ]
  
  connect() {
    this.editorTarget.addEventListener("trix-selection-change", function(event) {
      if (this.mutableAttachment) {
        this.imageFieldsTarget.classList.remove("hidden")
        let position = this.mutableAttachment.querySelector("img").offsetTop + this.mutableAttachment.querySelector("img").offsetHeight - 13
        this.imageFieldsTarget.style.top = `${position}px`
        this.altFieldTarget.value = this.currentAltText
      } else {
        this.imageFieldsTarget.classList.add("hidden")
      }
    }.bind(this))
  }
  
  setAltText(event) {
    let alt = event.currentTarget.value
    let content = this.trixAttachment.getContent()
    
    // Set span data-alt
    // this.mutableAttachment.querySelector('span').dataset.alt = alt
    
    // Change content
    let fragment = this.fragmentFromHTML(content)
    fragment.querySelector('span').dataset.alt = alt
    fragment.querySelector('img').alt = alt
    let div = document.createElement('div')
    div.appendChild(fragment)
    
    this.trixAttachment.setAttributes({content: div.innerHTML})
  }

  preventDefault(event) {
    event.preventDefault()
  }
  
  getTrixAttachment(id) {
    let attachments = this.attachmentManager.getAttachments()
    return attachments.find(attachment => attachment.id == id).attachment
  }
  
  fragmentFromHTML(html) {
    let range = document.createRange()
    range.selectNodeContents(document.body)
    return range.createContextualFragment(html)
  }
  
  get currentAltText() {
    let fragment = this.fragmentFromHTML(this.trixAttachment.getContent())
    return fragment.querySelector('img').alt
  }
  
  get trixAttachment() {
    return this.getTrixAttachment(this.mutableAttachment.dataset.trixId)
  }
  
  get mutableAttachment() {
    return this.element.querySelector("figure[data-trix-mutable]")
  }
  
  get attachmentManager() {
    return this.editorTarget.editorController.attachmentManager
  }
  
  get editor() {
    return this.editorTarget.editor
  }

}
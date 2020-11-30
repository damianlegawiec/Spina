import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "editor", "imageFields", "altField" ]
  
  connect() {
    this.editorTarget.addEventListener("trix-selection-change", function(event) {
      if (this.mutableImageAttachment) {
        this.imageFieldsTarget.classList.remove("hidden")
        let position = this.mutableImageAttachment.querySelector("img").offsetTop + this.mutableImageAttachment.querySelector("img").offsetHeight - 13
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
    this.mutableImageAttachment.firstElementChild.dataset.label = alt
    
    // Change content
    let fragment = this.fragmentFromHTML(content)
    fragment.firstElementChild.dataset.label = alt
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
    return this.getTrixAttachment(this.mutableImageAttachment.dataset.trixId)
  }
  
  get mutableImageAttachment() {
    return this.element.querySelector(`figure[data-trix-mutable][data-trix-content-type="Spina::Image"]`)
  }
  
  get attachmentManager() {
    return this.editorTarget.editorController.attachmentManager
  }
  
  get editor() {
    return this.editorTarget.editor
  }

}
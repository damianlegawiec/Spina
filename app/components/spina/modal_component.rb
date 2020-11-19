module Spina
  class ModalComponent < ApplicationComponent
    with_content_areas :body
    
    def initialize(size: "max-w-lg")
      @size = size
    end
    
  end
end
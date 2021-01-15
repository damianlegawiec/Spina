module Spina
  class FlashMessageComponent < ApplicationComponent
    
    def initialize(type:, message:)
      @type = type
      @message = message
    end
    
    def confetti?
      @type == "confetti"
    end
    
  end
end
module Spina
  class FlashMessageComponent < ApplicationComponent
    
    def initialize(type:, message:)
      @type = type
      @message = message
    end
    
    def confetti?
      @type == "confetti"
    end
    
    def theme
      case @type
      when "alert", "error"
        "bg-red-400"
      else
        "bg-gray-400"
      end
    end
    
  end
end
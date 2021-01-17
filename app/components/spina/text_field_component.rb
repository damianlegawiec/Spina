module Spina
  class TextFieldComponent < ApplicationComponent
    attr_accessor :f, :method
    
    def initialize(f, method)
      @f = f
      @method = method
    end
    
    def error_styles
      if has_errors?
        "border-red-500 ring-red-500 ring-1"
      else
        ""
      end
    end
    
    def error_messages
      f.object.errors[method.to_sym]
    end
    
    def has_errors?
      error_messages.present?
    end
    
    def placeholder
      f.object.class.human_attribute_name(method)
    end
    
  end
end
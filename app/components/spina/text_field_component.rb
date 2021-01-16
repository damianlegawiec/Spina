module Spina
  class TextFieldComponent < ApplicationComponent
    attr_accessor :f, :method
    
    def initialize(f, method)
      @f = f
      @method = method
    end
    
    def styles
      if has_errors?
        "border-red-500 ring-red-500 ring-1 mt-1 form-input px-4 py-3 font-medium block w-full max-w-5xl"
      else
        "mt-1 form-input px-4 py-3 font-medium block w-full max-w-5xl"
      end
    end
    
    def has_errors?
      f.object.errors.any?
    end
    
    def placeholder
      f.object.class.human_attribute_name(method)
    end
    
  end
end
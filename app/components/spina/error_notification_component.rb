module Spina
  class ErrorNotificationComponent < ApplicationComponent

    def initialize(form_object)
      @form_object = form_object
    end
    
    def render?
      @form_object.errors.any?
    end

    def errors
      @form_object.errors.full_messages
    end

  end
end
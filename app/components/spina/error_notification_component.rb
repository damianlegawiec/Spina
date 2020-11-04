module Spina
  class ErrorNotificationComponent < ApplicationComponent

    def initialize(form_object)
      @form_object = form_object
    end

    def errors
      @form_object.errors.full_messages
    end

  end
end
module Spina
  class TabLinkComponent < ApplicationComponent

    def initialize(label:, href:, active: false)
      @label = label
      @href = href
      @active = active
    end

    def call
      content_tag(:li) do
        link_to @label, @href, class: classes
      end
    end

    private

      def classes
        if @active
          "mx-4 block leading-loose text-gray-800 border-b-4 border-spina font-semibold text-sm"
        else
          "px-4 block leading-loose hover:text-gray-800 text-gray-400 font-semibold text-sm"
        end
      end

  end
end
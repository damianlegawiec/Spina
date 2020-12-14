module Spina
  class HeaderComponent < ApplicationComponent
    with_content_areas :navigation, :actions, :after_breadcrumbs
  end
end
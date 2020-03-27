module Spina
  class PagePartSerializer
    include FastJsonapi::ObjectSerializer

    # Attributes
    attributes :name, :content
  end
end
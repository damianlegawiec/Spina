module Spina
  class NavigationSerializer
    include FastJsonapi::ObjectSerializer

    # Attributes
    attributes :name, :label

    has_many :navigation_items
  end
end
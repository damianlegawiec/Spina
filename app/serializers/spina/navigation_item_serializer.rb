module Spina
  class NavigationItemSerializer
    include FastJsonapi::ObjectSerializer

    # Attributes
    attributes :page_id, :position, :ancestry
  end
end
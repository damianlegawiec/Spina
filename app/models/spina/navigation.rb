module Spina
  class Navigation < ApplicationRecord
    has_many :navigation_items, dependent: :destroy
    has_many :pages, through: :navigation_items

    scope :sorted, -> { order(:position) }

    validates :name, :label, presence: true
    validates :name, uniqueness: true

    def cache_key
      super + "_" + Mobility.locale.to_s
    end
    
    def to_partial_path
      "spina/admin/navigations/navigation"
    end
    
  end
end
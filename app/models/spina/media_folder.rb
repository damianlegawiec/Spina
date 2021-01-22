module Spina
  class MediaFolder < ApplicationRecord
    has_many :images, dependent: :nullify

    validates :name, presence: true, uniqueness: true
    
    def to_partial_path
      "spina/admin/media_folders/media_folder"
    end
  end
end
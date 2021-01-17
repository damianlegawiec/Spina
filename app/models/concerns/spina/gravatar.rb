require 'digest'

module Spina
  module Gravatar
    extend ActiveSupport::Concern
    
    def gravatar_url
      "https://www.gravatar.com/avatar/#{gravatar_hash}?d=mp"
    end
    
    private
    
      def gravatar_hash
        Digest::MD5.hexdigest(email.to_s.strip.downcase)
      end
    
  end
end
require 'nokogiri'

module HeroiconsHelper
  class FileNotFound < StandardError
  end
  
  def heroicon(name, style: :outline, size: nil, **options)
    file = read_file(Spina::Engine.root.join("app/assets/icons/heroicons", style.to_s, "#{name}.svg"))
    
    size ||= style == :outline ? 6 : 5
    
    doc = Nokogiri::XML(file)
    svg = doc.root
    classes = ["h-#{size}", "w-#{size}", options[:class]].compact
    svg[:class] = classes.join(" ")
    ActiveSupport::SafeBuffer.new(svg.to_s)
  end
  
  private
  
    def read_file(path)
      File.exist?(path) || raise(FileNotFound, "File #{path} not found")
      File.read(path)
    end  
    
end
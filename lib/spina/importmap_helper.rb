module Spina::ImportmapHelper
  def importmap_list_with_spina_from(*paths)
    [ %("stimulus": "#{asset_path("stimulus/libraries/stimulus")}"), importmap_spina_list_from(*paths) ].join(",\n")
  end

  def importmap_spina_list_from(*paths)
    Array(paths).flat_map do |path|
      absolute_path = Spina::Engine.root.join(path)
      dirname       = "spina/#{absolute_path.basename}"

      absolute_path.children.collect do |module_filename|
        module_name = importmap_module_name_from(module_filename)
        %("#{module_name}": "#{asset_path("#{dirname}/#{module_filename.basename}")}")
      end
    end.join(",\n")
  end

  private
    # Strip off the extension and any versioning data for an absolute module name.
    def importmap_module_name_from(filename)
      filename.basename.to_s.remove(filename.extname).split("@").first
    end
end
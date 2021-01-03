module Spina::SpinaHelper

  def spina_include_tags
    [
      javascript_include_tag("stimulus/libraries/es-module-shims", type: "module"),
      tag.script(type: "importmap-shim", src: asset_path("spina/importmap.json")),
      javascript_include_tag("stimulus/libraries/stimulus", type: "module-shim"),
      javascript_include_tag("spina/loaders/preloader", type: "module-shim")
    ].join("\n").html_safe
  end

end
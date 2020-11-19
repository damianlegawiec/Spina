module Spina::Admin
	module IconHelper
		
		def icon(name, css: "")
			case name.to_s
			when "chat-alt"
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />'.html_safe
				end
			when "plus"
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />'.html_safe
				end
			when "reorder"
				content_tag(:svg, heroicons_small.merge(class: css)) do
					'<path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />'.html_safe
				end
			when "grip"			
				content_tag(:svg, fontawesome.merge(class: css)) do
					'<path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/>'.html_safe
				end
			end
		end
		
		private
		
			def fontawesome
				{viewBox: "0 0 512 512", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg"}
			end
		
			def heroicons_small
				{viewBox: "0 0 20 20", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg"}
			end
			
			def heroicons_medium
				{viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", xmlns: "http://www.w3.org/2000/svg"}
			end

	end
end
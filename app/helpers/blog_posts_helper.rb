module BlogPostsHelper
	def tag_links(tags)
	  tags.split(",").map{|tag| link_to tag.strip, tag_path(tag.strip) }.join(", ") 
	end
	def nl2br(s)
	  s.gsub(/\n/, '<br>')
	end
end

class BlogPost < ActiveRecord::Base
	has_many :comments
	belongs_to :user

	paginates_per 3

	def slug
	    title.downcase.gsub(" ", "-")  
	end

	def to_param
	    "#{id}-#{slug}"
	end
end

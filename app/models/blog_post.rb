class BlogPost < ActiveRecord::Base
	has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

	has_many :comments
	belongs_to :user
	has_and_belongs_to_many :tags
	belongs_to :category

	paginates_per 3

	scope :tag, -> (tag) { where tag: tag}
	scope :category, -> (category) { where category: category }

	def slug
	    title.downcase.gsub(" ", "-")  
	end

	def to_param
	    "#{id}-#{slug}"
	end
end

class BlogPost < ActiveRecord::Base

	has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
	validates_attachment_presence :image
  	validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

	has_many :comments
	belongs_to :user
	has_many :taggings
	has_many :tags, through: :taggings
	belongs_to :category

	paginates_per 10

	scope :tag, -> (tag) { where tag: tag}
	scope :category, -> (category) { where category: category }

	def slug
	    title.downcase.gsub(" ", "-")  
	end

	def to_param
	    "#{id}-#{slug}"
	end
	def all_tags=(names)
	  self.tags = names.split(",").map do |name|
	      Tag.where(name: name.strip).first_or_create!
	  end
	end

	def all_tags
	  self.tags.map(&:name).join(", ")
	end
end

class Site < ActiveRecord::Base
	has_many :contact_user
	has_many :speaking_users
end
class ContactMailer < ApplicationMailer
	default from: 'info@kathyizard.com'
 
	def contact_email(user)
		@url  = 'http://example.com/login'
		mail(to: 'kathy@kathyizard.com', subject: 'Thank You For Contacting Kathy')
	end
end

class ContactMailer < ApplicationMailer
	default from: 'kailey.izard@gmail.com'
 
	def contact_email(contact_user)
	    @contact_user = contact_user
    	@url  = 'http://google.com/'
	    mail(to: 'kailey.izard@gmail.com', subject: 'New Contact Submission')
  	end
  	def speaking_email(speaking_user)
	    @speaking_user = speaking_user
    	@url  = 'http://google.com/'
	    mail(to: 'kailey.izard@gmail.com', subject: 'New Speaking Request')
  	end
end

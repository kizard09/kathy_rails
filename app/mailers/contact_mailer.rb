class ContactMailer < ApplicationMailer
	default from: ''
 
	def contact_email(contact_user)
	    @contact_user = contact_user
	    mail(to: '', subject: '')
  	end
  	def speaking_email(speaking_user)
	    @speaking_user = speaking_user
	    mail(to: '', subject: '')
  	end
end

class SiteController < ApplicationController


  def home
  end

  def aboutme
  end

  def mooreplace
  end

  def aboutyou
  end

  def speaking
  end

  def media
  end

  def contact
    @contact_user = ContactUser.new
  end
  def create
    @contact_user = ContactUser.new(contact_user_params)

    respond_to do |format|
      if @contact_user.save
        ContactMailer.contact_email(@contact_user).deliver_now
        format.html { redirect_to @contact_user, notice: 'Contact user was successfully created.' }
        format.json { render :show, status: :created, location: @contact_user }
      else
        format.html { render :new }
        format.json { render json: @contact_user.errors, status: :unprocessable_entity }
      end
    end
  end

  def book
  end
  def contact_email
    data = params[:body]
    subject=params[:subject]
    user = params[:email]
    ContactMailer.contact_email(data,user,subject).deliver_now
    #name of mailer.name_of_function(parameters).deliver

    # UserMailer.welcome_email(current_user).deliver

  end
end

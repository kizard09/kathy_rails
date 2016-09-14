class ContactUsersController < ApplicationController
  before_action :set_contact_user, only: [:show, :edit, :update, :destroy]

  # GET /contact_users
  # GET /contact_users.json
  def index
    @contact_users = ContactUser.all
  end

  # GET /contact_users/1
  # GET /contact_users/1.json
  def show
  end

  # GET /contact_users/new
  def new
    @contact_user = ContactUser.new
  end

  # GET /contact_users/1/edit
  def edit
  end

  # POST /contact_users
  # POST /contact_users.json
  def create
    @contact_user = ContactUser.new(contact_user_params)

    respond_to do |format|
      if @contact_user.save
        ContactMailer.contact_email(@contact_user).deliver_now
        format.html { redirect_to @contact_user, notice: 'Contact user was successfully created.' }
        format.json { render :show}
      else
        format.html { render :new }
        format.json { render json: @contact_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /contact_users/1
  # PATCH/PUT /contact_users/1.json
  def update
    respond_to do |format|
      if @contact_user.update(contact_user_params)
        format.html { redirect_to @contact_user, notice: 'Contact user was successfully updated.' }
        format.json { render :show, status: :ok, location: @contact_user }
      else
        format.html { render :edit }
        format.json { render json: @contact_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /contact_users/1
  # DELETE /contact_users/1.json
  def destroy
    @contact_user.destroy
    respond_to do |format|
      format.html { redirect_to contact_users_url, notice: 'Contact user was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_contact_user
      @contact_user = ContactUser.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_user_params
      params.require(:contact_user).permit(:name, :first_name, :last_name, :email, :message)
    end
end

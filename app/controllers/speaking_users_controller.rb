class SpeakingUsersController < ApplicationController
  before_action :set_speaking_user, only: [:show, :edit, :update, :destroy]

  # GET /speaking_users
  # GET /speaking_users.json
  def index
    @speaking_users = SpeakingUser.all
  end

  # GET /speaking_users/1
  # GET /speaking_users/1.json
  def show
  end

  # GET /speaking_users/new
  def new
    @speaking_user = SpeakingUser.new
  end

  # GET /speaking_users/1/edit
  def edit
  end

  # POST /speaking_users
  # POST /speaking_users.json
  def create
    @speaking_user = SpeakingUser.new(speaking_user_params)

    respond_to do |format|
      if @speaking_user.save
        ContactMailer.speaking_email(@speaking_user).deliver_now
        format.html { redirect_to @speaking_user, notice: 'Speaking user was successfully created.' }
        format.json { render :show, status: :created, location: @speaking_user }
      else
        format.html { render :new }
        format.json { render json: @speaking_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /speaking_users/1
  # PATCH/PUT /speaking_users/1.json
  def update
    respond_to do |format|
      if @speaking_user.update(speaking_user_params)
        format.html { redirect_to @speaking_user, notice: 'Speaking user was successfully updated.' }
        format.json { render :show, status: :ok, location: @speaking_user }
      else
        format.html { render :edit }
        format.json { render json: @speaking_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /speaking_users/1
  # DELETE /speaking_users/1.json
  def destroy
    @speaking_user.destroy
    respond_to do |format|
      format.html { redirect_to speaking_users_url, notice: 'Speaking user was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_speaking_user
      @speaking_user = SpeakingUser.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def speaking_user_params
      params.require(:speaking_user).permit(:first_name, :last_name, :email, :event, :message)
    end
end

require 'test_helper'

class ContactUsersControllerTest < ActionController::TestCase
  setup do
    @contact_user = contact_users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:contact_users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create contact_user" do
    assert_difference('ContactUser.count') do
      post :create, contact_user: { email: @contact_user.email, first_name: @contact_user.first_name, last_name: @contact_user.last_name, message: @contact_user.message, name: @contact_user.name }
    end

    assert_redirected_to contact_user_path(assigns(:contact_user))
  end

  test "should show contact_user" do
    get :show, id: @contact_user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @contact_user
    assert_response :success
  end

  test "should update contact_user" do
    patch :update, id: @contact_user, contact_user: { email: @contact_user.email, first_name: @contact_user.first_name, last_name: @contact_user.last_name, message: @contact_user.message, name: @contact_user.name }
    assert_redirected_to contact_user_path(assigns(:contact_user))
  end

  test "should destroy contact_user" do
    assert_difference('ContactUser.count', -1) do
      delete :destroy, id: @contact_user
    end

    assert_redirected_to contact_users_path
  end
end

require 'test_helper'

class SpeakingUsersControllerTest < ActionController::TestCase
  setup do
    @speaking_user = speaking_users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:speaking_users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create speaking_user" do
    assert_difference('SpeakingUser.count') do
      post :create, speaking_user: { email: @speaking_user.email, event: @speaking_user.event, first_name: @speaking_user.first_name, last_name: @speaking_user.last_name, message: @speaking_user.message }
    end

    assert_redirected_to speaking_user_path(assigns(:speaking_user))
  end

  test "should show speaking_user" do
    get :show, id: @speaking_user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @speaking_user
    assert_response :success
  end

  test "should update speaking_user" do
    patch :update, id: @speaking_user, speaking_user: { email: @speaking_user.email, event: @speaking_user.event, first_name: @speaking_user.first_name, last_name: @speaking_user.last_name, message: @speaking_user.message }
    assert_redirected_to speaking_user_path(assigns(:speaking_user))
  end

  test "should destroy speaking_user" do
    assert_difference('SpeakingUser.count', -1) do
      delete :destroy, id: @speaking_user
    end

    assert_redirected_to speaking_users_path
  end
end

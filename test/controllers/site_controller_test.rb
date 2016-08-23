require 'test_helper'

class SiteControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get aboutme" do
    get :aboutme
    assert_response :success
  end

  test "should get mooreplace" do
    get :mooreplace
    assert_response :success
  end

  test "should get aboutyou" do
    get :aboutyou
    assert_response :success
  end

  test "should get speaking" do
    get :speaking
    assert_response :success
  end

  test "should get media" do
    get :media
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get book" do
    get :book
    assert_response :success
  end

end

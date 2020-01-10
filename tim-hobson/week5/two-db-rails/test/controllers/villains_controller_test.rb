require 'test_helper'

class VillainsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get villains_new_url
    assert_response :success
  end

  test "should get create" do
    get villains_create_url
    assert_response :success
  end

  test "should get index" do
    get villains_index_url
    assert_response :success
  end

  test "should get show" do
    get villains_show_url
    assert_response :success
  end

  test "should get edit" do
    get villains_edit_url
    assert_response :success
  end

  test "should get update" do
    get villains_update_url
    assert_response :success
  end

  test "should get destroy" do
    get villains_destroy_url
    assert_response :success
  end

end

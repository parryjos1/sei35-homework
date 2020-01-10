require 'test_helper'

class SuperheroControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get superhero_new_url
    assert_response :success
  end

  test "should get create" do
    get superhero_create_url
    assert_response :success
  end

  test "should get index" do
    get superhero_index_url
    assert_response :success
  end

  test "should get show" do
    get superhero_show_url
    assert_response :success
  end

  test "should get edit" do
    get superhero_edit_url
    assert_response :success
  end

  test "should get update" do
    get superhero_update_url
    assert_response :success
  end

  test "should get destroy" do
    get superhero_destroy_url
    assert_response :success
  end

end

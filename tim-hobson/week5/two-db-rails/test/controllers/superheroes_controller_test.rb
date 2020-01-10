require 'test_helper'

class SuperheroesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get superheroes_new_url
    assert_response :success
  end

  test "should get create" do
    get superheroes_create_url
    assert_response :success
  end

  test "should get index" do
    get superheroes_index_url
    assert_response :success
  end

  test "should get show" do
    get superheroes_show_url
    assert_response :success
  end

  test "should get edit" do
    get superheroes_edit_url
    assert_response :success
  end

  test "should get update" do
    get superheroes_update_url
    assert_response :success
  end

  test "should get destroy" do
    get superheroes_destroy_url
    assert_response :success
  end

end

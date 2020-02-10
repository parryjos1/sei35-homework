require 'test_helper'

class ReservationsControllerTest < ActionDispatch::IntegrationTest
  test "should get book" do
    get reservations_book_url
    assert_response :success
  end

end

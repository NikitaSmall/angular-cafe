require 'test_helper'

class OptionsControllerTest < ActionController::TestCase
  test "should get all" do
    get :all
    assert_response :success
  end

  test "should get set_options" do
    get :set_options
    assert_response :success
  end

end

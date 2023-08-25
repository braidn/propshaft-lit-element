require "application_system_test_case"

class WatchesTest < ApplicationSystemTestCase
  test "visiting the root url/index" do
    visit watches_url
  
    assert_selector "h1", text: "Watches"
  end
end

require "application_system_test_case"

class WatchesTest < ApplicationSystemTestCase
  test "visiting the root url/index" do
    visit watches_url
  
    assert_selector "h1", text: "Your Watches"
  end

  test "displays a list of watches" do
    visit watches_url

    assert_text watches(:nomos).name
    assert_text watches(:grand_seiko).name
  end
end

require "test_helper"

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  Capybara.register_driver(:playwright) do |app|
    Capybara::Playwright::Driver.new(
      app,
      browser_type: :firefox, # :chromium (default) or :firefox, :webkit
      headless: true # true for headless mode (default), false for headful mode.
    )
  end

  Capybara.default_max_wait_time = 15
  driven_by :playwright
end

require "test_helper"

class WatchTest < ActiveSupport::TestCase
  def setup
    @subject = Watch.new
  end

  def test_has_a_name
    must have_db_column(:name)
  end
end

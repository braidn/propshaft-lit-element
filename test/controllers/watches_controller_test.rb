require "test_helper"

class WatchesControllerTest < ActionDispatch::IntegrationTest
  RespObject = Struct.new(:response)

  def setup
    get watches_path

    @subject = RespObject.new(response)
  end

  def test_success_on_watches_index_path
    must respond_with 200
  end
end

# ruby2js: preset
#
class WatchElement < LitElement
  self.styles = <<~CSS
    h1 { font-size: 2em; }
  CSS

  def initialize
    @callout = "Your Watches"
  end

  def render
    <<~HTML
      <h1>#{@callout}</h1>
    HTML
  end
end

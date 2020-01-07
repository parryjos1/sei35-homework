class MagicController < ApplicationController
  def answer
    rando = rand 1..2
    if rando == 1
      @output = "Yes I see it its true"
    elsif rando == 2
      @output = "No I see your getting scammed"
    end
  end
end

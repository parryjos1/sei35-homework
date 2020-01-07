class GameController < ApplicationController

  def secret_number
  end

  def get_number
    @guess_number = rand(1..10).to_i
    @win = false

    if @guess_number == params["number"].to_i
      @win = true

    end

  end
end

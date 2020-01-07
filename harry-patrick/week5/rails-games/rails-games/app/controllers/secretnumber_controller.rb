class SecretnumberController < ApplicationController

  def index
  end

  def show
    @user_number = params[:number]
    @rand_number = rand 1..10

    if @user_number == @rand_number
      @result = "You guessed right!"
      else
      @result = "You guessed wrong loser!"
    end
  end
end

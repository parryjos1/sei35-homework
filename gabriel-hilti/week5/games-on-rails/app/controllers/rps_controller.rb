class RpsController < ApplicationController

  def play
    choices = ['rock', 'paper', 'scissors']
    @server = choices[rand 0..2]
    @user = params[:throw].downcase
    @check =  (choices.include? @user) ? true : false

    @output = case
    when @server == @user
      "It's a tie!"
    when (@server == 'rock' && @user == 'paper') || (@server == 'scissors' && @user == 'rock') || (@server == 'paper' && @user == 'scissors')
      "You won!"
    else
      "You lost!"
    end

  end

end

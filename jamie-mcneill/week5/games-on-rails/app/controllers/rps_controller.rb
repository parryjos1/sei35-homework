class RpsController < ApplicationController  #inherits from ApplicationController class.

  def play

    @users_choice = params[:throw]

    outcome = ["rock","paper","scissors"]

    @computer_choice = outcome[rand(3).floor]

    # if @users_choice == @computer_choice
    #   @result = "User Wins!"
    # else
    #   @result = "Computer Wins!"
    # end

    #bonus
    if @users_choice == "rock" && @computer_choice == "scissors"
      @result = "You Win!!"
    elsif @users_choice == "rock" && @computer_choice == "paper"
      @result = "Computer Wins"
    elsif @users_choice == "paper" && @computer_choice == "rock"
      @result = "You Win!!"
    elsif @users_choice == "paper" && @computer_choice == "scissors"
      @result = "Computer Wins"
    elsif @users_choice == "scissors" && @computer_choice == "paper"
      @result = "You Win!!"
    elsif @users_choice == "scissors" && @computer_choice == "rock"
      @result = "Computer Wins"
    else
      @result = "It's a draw"
    end

  end


end

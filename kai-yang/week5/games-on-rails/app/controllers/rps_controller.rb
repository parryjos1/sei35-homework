class RpsController < ApplicationController
  def play

  end

  def check
    user_choice = params[:throw]
    server_choice_array = ['rock', 'paper', 'scissors']
    server_choice = server_choice_array[rand 0..server_choice_array.length]
    # win conditions
    if user_choice == "rock" && server_choice == "scissors"
      @result = "User wins!"
    elsif user_choice == "scissors" && server_choice == "paper"
      @result = "User wins!"
    elsif user_choice == "paper" && server_choice == "rock"
      @result = "User wins!"
    elsif server_choice == "rock" &&user_choice == "scissors"
      @result = "Server wins!"
    elsif server_choice == "scissors" &&user_choice == "paper"
      @result = "Server wins!"
    elsif server_choice == "paper" &&user_choice == "rock"
      @result = "Server wins!"
    else
      @result = "Play again!"
    end
    # binding.pry
  end
end

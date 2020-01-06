class RpsController < ApplicationController

  def play_hand

    game_hands = [
      "rock",
      "paper",
      "scissors"
    ]

    game_logic = {
      "rock" => "scissors",
      "scissors" => "paper",
      "paper" => "rock"
    }

    # Use params[:throw] as a user's choice
    @p1_hand = params[:hand]
    @ai_hand = game_hands.sample #need to code a way that this hand can't choose p1's hand

    @result = nil

    if game_logic[@p1_hand] == @ai_hand
      @result = 'User wins'
    elsif @p1_hand == @ai_hand
      @result = 'Draw'
    else
      @result = 'AI wins'

    






    binding.pry


  end


end
